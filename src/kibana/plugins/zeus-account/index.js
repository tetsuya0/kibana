define(function (require, module, exports) {
  // require('plugins/zeus/saved_searches/saved_searches');
  // require('plugins/zeus/directives/timechart');
  // require('components/collapsible_sidebar/collapsible_sidebar');
  // require('plugins/zeus/components/field_chooser/field_chooser');
  // require('plugins/zeus/controllers/zeus');
  // require('css!plugins/zeus/styles/main.css');

  var subItems = require('plugins/zeus-account/sections/index');

  require('modules').get('zeus-account')
    .run(function ($rootScope) {
      console.log('abc');
    });

  require('routes')
  .when('/zeus-account', {
    redirectTo: '/zeus-account/my'
    // template: require('text!plugins/zeus-account/index.html')
  });

  var apps = require('registry/apps');
  apps.register(function ZeusAccountAppModule() {
    return {
      id: 'zeus-account',
      name: '',
      order: 5,
      icon: 'user',
      subName: 'User Account Options:',
      subitems: subItems
    };
  });

});
