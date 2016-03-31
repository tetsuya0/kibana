define(function (require) {
  var _ = require('lodash');

  require('routes')
  .when('/zeus-account/my', {
    template: require('text!plugins/zeus-account/sections/myaccount/index.html')
  });

  require('modules').get('apps/zeus-account')
  .controller('myAccountCtrl', function ($scope, kbnVersion, buildNum, commitSha) {
    $scope.kbnVersion = kbnVersion;
    $scope.buildNum = buildNum;
    $scope.commitSha = commitSha;

    $scope.properties = [
      {_id: '1', name: 'Email', value: 'a@lexholden.com'},
      {_id: '2', name: 'Name', value: 'Alex Holden'},
      {_id: '3', name: 'Password', value: 'fdjkfhukfhusklfseukf'},
    ];

    $scope.$parent.$parent.$root.activeApp.cleanPath = 'myaccount';

  });



  return {
    order: Infinity,
    name: 'myaccount',
    display: 'My Account',
    url: '#/zeus-account/my'
  };
});