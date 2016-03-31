define(function (require) {
  var _ = require('lodash');

  // require('routes')
  // .when('/zeus-account/login', {
  //   template: require('text!plugins/zeus-account/sections/login/index.html')
  // });

  // require('modules').get('apps/zeus-account')
  // .controller('accountLoginCtrl', function ($scope, $location, kbnVersion, buildNum, commitSha) {
  //   $scope.kbnVersion = kbnVersion;
  //   $scope.buildNum = buildNum;
  //   $scope.commitSha = commitSha;
  //   $scope.user = {email: undefined, password: undefined};

  //   $scope.login = function () {
  //     console.log('We\'re checking the login params: ' + $scope.user.email + ' / ' + $scope.user.password);
  //     $scope.$parent.$parent.$root.hideTitleBar = false;
  //     $location.url('/dashboard');
  //   };

  //   $scope.init = function () {
  //     $scope.$parent.$parent.$root.hideTitleBar = true;
  //   };

  // });

  return {
    order: Infinity,
    name: 'myaccount',
    display: 'Logout',
    url: '/logout'
  };
});