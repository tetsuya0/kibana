define(function (require) {
  var angular = require('angular');

  angular.module('zeusUi', [])
    .directive('severityIcon', function ($compile) {
      return {
        restrict: 'E',
        scope: {
          level: '@'
        },
        link: function (scope, elem, attr) {
          scope.$watch('level', function (newValue, oldValue) {
            if (newValue) {
              scope.color = ['crimson', '#FF5722', '#F1AF27'][scope.level - 1];
              scope.text = ['CRITICAL', 'WARNING', 'CAUTION'][scope.level - 1];
            }
          });
        },
        template: '<i class="fa fa-exclamation-triangle"' +
            'style="font-size: 24px; color: {{color}}; margin-top: 4px;">' +
              '<md-tooltip md-direction="right" ng-if="text !== undefined">{{text}}</md-tooltip>' +
          '</i>'
      };
    });
});