define(function (require) {
  var _ = require('lodash');
  var angular = require('angular');
  require('css!plugins/zeus-account/sections/myorganisation/styles/main.css');
  require('ngMaterialTable');
  require('zeusUi');
  require('routes')
  .when('/zeus-account/myorg', {
    template: require('text!plugins/zeus-account/sections/myorganisation/index.html')
  });
  require('plugins/zeus-account/sections/myorganisation/directives/myorgRow');
  require('plugins/zeus-account/sections/myorganisation/utils/myorg-utils');
  require('modules').get('apps/zeus-account/sections/myorganisation', ['md.data.table', 'zeusUi'])
  .controller('myorgUsersController', ['$q', 'myorgUsersFactory', '$scope', '$timeout', '$mdDialog', '$filter', '$log',
    function ($q, myorgUsersFactory, $scope, $timeout, $mdDialog, $filter, $log) {

      $scope.defining = true; // temp disabling add button

      $scope.$log = $log;
      $scope.myorg = [];
      $scope.myorg_display = 'My Organisation', // temp

      $scope.allSelected = false;
      $scope.query = {order: '', limit: 25, page: 1};
      $timeout(function () {
        angular.element('#selectAll').children('div').css('display', 'none');
      });
      /**
       * Create a new myorg and start editing it. Doesn't commit to api yet.
       * @return {Alert} [The empty myorg template]
       */
      $scope.new = function () {
        var items = myorgUsersFactory.generate();
        items._edit = false;
        // TODO Set the active field to be the new myorg name now?
        $scope.myorg.splice(0, 0, items);
        $timeout(function () {
          $scope.edit(items);
        }, 10); // Delay editing so the row animates
        return items;
      };
      $scope.set = function (item) {
        //
        return item;
      };
      $scope.add = function (item) {
        item._edit = false;
        $scope.myorg.splice(0, 0, $scope.set(item));
        $timeout(function () {
          $scope.edit(item);
        }, 10); // Delay editing so the row animates
        return item;
      };
      /**
       * Enables edit mode for an item
       * @param  {[type]} a [description]
       * @return {[type]}   [description]
       */
      $scope.edit = function (item, index) {
        item._edit = true;
        $scope.currentEdit = angular.copy(item); // TODO What happens if this is invalid?
        console.log($scope.currentEdit);
        item.editMode = true;
      };
      /**
       * Save an item. TODO Future versions should save multiple items at once
       * @param  {[type]} a [description]
       * @return {[type]}   [description]
       */
      $scope.save = function (item, userForm) {
        item.editMode = false;
        if (item.id === undefined) { // We're creating a new one
          myorgUsersFactory.create(item.token, item, function (b) {
            console.log(b);
            item._edit = false;
          });
        } else {
          myorgUsersFactory.update(item, $scope.currentEdit, function () {
            item._edit = false;
          });
        }
        // TODO do we only stop showing the edit once saves? This is synchronous and lazy bad practise.
        // TODO Should probably show a preloader until the item is saved
      };
      /**
       * Reverts changes and cancels the item edit. If the item made changes, prompts with dialog first.
       * @param  {[type]} item [description]
       * @return {[type]}       [description]
       */
      $scope.cancel = function (item) {
        function cancel() {
          var i = $scope.myorg.indexOf(item); // TODO Might we have a bug where it can't be found?
          _.keys($scope.currentEdit).forEach(function (e) {
            item[e] = $scope.currentEdit[e];
          }); // TODO Sloppy, but the only way I can see to animate cancelling the edit (since it doesn't change the ng-repeat)
          // $scope.myorg[i] = angular.copy($scope.currentEdit);
          $scope.currentEdit = undefined;
          item.editMode = false;
          $scope.myorg[i]._edit = false;
        }

        if (angular.toJson(item) === angular.toJson($scope.currentEdit)) { // Strips out scope specific variables other comparisons won't
          cancel();
        } else {
          var confirm = $mdDialog.confirm({
            title: 'You are about cancel your changes to "' + item.name + '"',
            content: ($scope.currentEdit.name !== item.name ?
            ('You changed the name to "' + item.name + '" but this will be lost. <br /><br />') :
            ('')) + '<h4>This can not be undone. Are you sure?</h4>', // TODO This doesn't support deleting just one item
            ok: 'Yes, Cancel!',
            cancel: 'Do Nothing'
          });
          $mdDialog.show(confirm).then(function () {
            cancel();
          }, function () {
          });
        }
      };
      /**
       * Deletes given items (or all selected if one isn't passed) after a confirmation dialog
       * @param  {[array, object]} item [the item(s) to delete. If undefined, defaults to selected items]
       * @return {[type]}       [description]
       */
      $scope.delete = function (item) { // TODO should delete a single or multiple intelligently
        if (item === undefined) {
          item = _.filter($scope.myorg, '_selected', true);
        }
        else {
          item = [item];
        }
        var confirm = $mdDialog.confirm({
          title: 'You are about to permanently delete ' + (item.length > 1 ? (item.length + ' items:') : ' an item:'),
          content: getSelectedUsersHtml(item) + '<h4>This can not be undone. Are you sure?</h4>', // TODO This doesn't support deleting just one item
          ok: 'Yes, Delete!',
          cancel: 'Do Nothing'
        });
        $mdDialog.show(confirm).then(function () {
          myorgUsersFactory.del(item);
          if (item.length > 1) {
            $scope.allSelected = false;
          }
          // TODO Can we fade out deleted items?
          // TODO shall we only remove it from the list on successful delete callback on server?
          item.forEach(function (e, i) {
            _.remove($scope.myorg, function (n) {
              return n.id === e.id && n.token === e.token;
            }); // TODO How does this affect items that haven't synced and got an ID yet?
          });
          item.editMode = false;
        }, function () {
        });
      };
      /**
       * Enables/Disables selected items after a confirmation dialog
       * @param  {Boolean} state [The state to set, true = enabled, false = disabled]
       * @param  {[type]} ev    [description]
       * @return {[type]}       [description]
       */
      $scope.toggleStatus = function (state, ev) {
        var items = _.filter($scope.myorg, '_selected', true);
        var confirm = $mdDialog.confirm({
          title: 'You are about to ' + (state ? 'enable' : 'disable') + ' the following items:',
          content: getSelectedUsersHtml(items),
          ok: 'Yes, ' + (state ? 'enable' : 'disable') + ' them!',
          cancel: 'Do Nothing'
        });
        $mdDialog.show(confirm).then(function () { // TODO This should be cleaner
          _.forEach(_.filter($scope.myorg, '_selected', true), function (e, i) {
            e.status = state;
          }); // TODO We want to push our changes
        }, function () {
        });
      };
      /**
       * Toggle the selection for a given item
       * @param  {Alert} a [The item to select]
       * @return {Alert}   [The item you just selected]
       */
      $scope.select = function (a) {
        a._selected = !a._selected;
        $scope.allSelected = _.some($scope.myorg, '_selected', true);
        return a;
      };
      /**
       * Selects or deselects all items depending on if any are set
       * @param  {Boolean} status [Optional. Whether to enable or disable all. Defaults to yes only if no items are selected]
       * @return {[type]}   [description]
       */
      $scope.selectAll = function (status) {
        if (status === undefined) {
          status = !_.some($scope.myorg, '_selected', true);
        }
        _.forEach($scope.myorg, function (e, i) {
          e._selected = status;
        });
        $scope.allSelected = status;
      };
      /**
       * Render simple HTML to display a given set of item names
       * @param  {[type]} items [description]
       * @return {[type]}        [description]
       */
      function getSelectedUsersHtml(items) {
        var str = '<div style="padding: 50px; margin: auto; font-weight: bold;">';
        if (items.length === undefined) {
          items = [items];
        }
        _.forEach(items, function (e, i) {
          str += e.name + '<br />';
        });
        str += '</div>';
        return str;
      }

      $scope.operators = ['>', '<', '==', '!=', '>=', '<='];
      $scope.severity = ['Critical', 'Warning', 'Caution'];
      $scope.addEmail = function (items) {
        if (items.actions.length < 3) {
          items.actions.push('');
        }
      };
      $scope.addBucket = function (items) {
        if (items.tags.databuckets.length < 3) {
          items.tags.databuckets.push('');
        }
      };
      myorgUsersFactory.get('token', function (r) { // temp
        if (0 < r.data.length) {
          r.data.forEach(function (e, i) {
            e._selected = false;
            $scope.add(e);
          });
        }
      });
    }]);
  return {
    order: Infinity,
    name: 'myorganisation',
    display: 'My Organisation',
    url: '#/zeus-account/myorg'
  };
});
