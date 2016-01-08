var moment = require('moment');
require('plugins/ciscoZeus-clock/less/main.less');
require('ui/chrome').setNavBackground('#222222').setTabs([]);

var app = require('ui/modules').get('app/ciscoZeus-clock', []);

require('ui/routes')
  .when('/', {
    template: require('plugins/ciscoZeus-clock/templates/index.html'),
    resolve: {
      currentTime: function ($http) {
        return $http.get('/ciscoZeus-clock/api/example')
        .then(function (resp) {
          return resp.data.time;
        });
      }
    }
  });

app.controller('ciscoZeusClockHelloWorld', function ($scope, $route, $interval) {
  $scope.title = 'Cisco Zeus Clock';
  $scope.description = 'An awesome Kibana plugin';

  var currentTime = moment($route.current.locals.currentTime);
  $scope.currentTime = currentTime.format('HH:mm:ss');
  var unsubscribe = $interval(function () {
    $scope.currentTime = currentTime.add(1, 'second').format('HH:mm:ss');
  }, 1000);
  $scope.$watch('$destroy', unsubscribe);

});
