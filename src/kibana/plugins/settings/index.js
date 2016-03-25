define(function (require, module, exports) {
  var _ = require('lodash');
  var subItems = require('plugins/settings/sections/index');

  require('css!plugins/settings/styles/main.css');
  require('filters/start_from');

  require('routes')
  .when('/settings', {
    redirectTo: '/settings/indices'
  });

  require('modules').get('apps/settings')
  .directive('kbnSettingsApp', function (Private, $route, timefilter) {
    return {
      restrict: 'E',
      template: require('text!plugins/settings/app.html'),
      transclude: true,
      scope: {
        sectionName: '@section'
      },
      link: function ($scope, $el) {
        timefilter.enabled = false;
        $scope.sections = subItems;
        $scope.section = _.find($scope.sections, { name: $scope.sectionName });

        $scope.sections.forEach(function (section) {
          section.class = (section === $scope.section) ? 'active' : void 0;
        });
      }
    };
  });

  var apps = require('registry/apps');
  apps.register(function SettingsAppModule() {
    return {
      id: 'settings',
      name: '',
      order: 3,
      icon: 'wrench',
      subitems: subItems
    };
  });
});
