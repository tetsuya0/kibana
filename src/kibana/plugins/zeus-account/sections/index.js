define(function (require) {
  // each of these private modules returns an object defining that section, their properties
  // are used to create the nav bar
  return [
    require('plugins/zeus-account/sections/myaccount/index'),
    require('plugins/zeus-account/sections/myorganisation/index'),
    require('plugins/zeus-account/sections/billing/index'),
    require('plugins/zeus-account/sections/tokens/index'),
    require('plugins/zeus-account/sections/login/index'),
  ];
});