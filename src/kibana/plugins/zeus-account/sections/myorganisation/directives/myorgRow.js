require('modules').get('apps/zeus-account/sections/myorganisation', ['md.data.table'])
  .directive('myorgRulesForm', function () {
    return {
      templateUrl: 'plugins/zeus-account/sections/myorganisation/template/rulesForm.html'
    };
  })
  .directive('myorgEmailsForm', function () {
    return {
      templateUrl: 'plugins/zeus-account/sections/myorganisation/template/emailsForm.html'
    };
  })
  .directive('myorgBucketsForm', function () {
    return {
      templateUrl: 'plugins/zeus-account/sections/myorganisation/template/bucketsForm.html'
    };
  })
  .directive('userRow', function () {
    return {
      restrict: 'A',
      // controller: editMyOrganisationCtrl,
      templateUrl: 'plugins/zeus-account/sections/myorganisation/template/row.html'
    };
  })
  .controller('editMyOrganisationCtrl', [function ($scope) {
    $scope.user.buckets = 'myOrg Test';
  }]);

