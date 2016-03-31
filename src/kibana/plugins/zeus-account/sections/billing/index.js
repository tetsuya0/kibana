define(function (require) {
  var _ = require('lodash');

  require('routes')
  .when('/zeus-account/billing', {
    template: require('text!plugins/zeus-account/sections/billing/index.html')
  });

  require('modules').get('apps/settings')
  .controller('accountBillingCtrl', function ($scope, kbnVersion, buildNum, commitSha) {
    $scope.kbnVersion = kbnVersion;
    $scope.buildNum = buildNum;
    $scope.commitSha = commitSha;
  });

  var visTypes = require('registry/vis_types');
  visTypes.register(require('plugins/zeus-account/widgets/billing'));

  return {
    order: Infinity,
    name: 'billing',
    display: 'Billing',
    url: '#/zeus-account/billing'
  };
});