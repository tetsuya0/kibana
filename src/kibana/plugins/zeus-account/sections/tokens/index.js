define(function (require) {
  var _ = require('lodash');

  require('routes')
  .when('/zeus-account/tokens', {
    template: require('text!plugins/zeus-account/sections/tokens/index.html')
  });

  require('modules').get('apps/settings')
  .controller('AccountTokenCtrl', function ($scope, kbnVersion, buildNum, commitSha) {
    $scope.kbnVersion = kbnVersion;
    $scope.buildNum = buildNum;
    $scope.commitSha = commitSha;

    $scope.$parent.$parent.$root.activeApp.cleanPath = 'tokens';

  });

  return {
    order: Infinity,
    name: 'tokens',
    display: 'Tokens',
    url: '#/zeus-account/tokens'
  };
});