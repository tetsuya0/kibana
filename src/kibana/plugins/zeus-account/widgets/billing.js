define(function (require) {
  require('css!plugins/zeus-account/styles/main.css');
  require('plugins/zeus-account/sections/billing/billing-controller');
  return function (Private) {
    var TemplateVisType = Private(require('plugins/vis_types/template/template_vis_type'));
    return new TemplateVisType({
      name:           'billing',
      title:          'Billing',
      icon:           'fa-dollar', // TODO Can we localise this to the user's region? fa-eur and gbp & yen and others exist
      description:    'Add a widget showing Zeus billing info, see how close you are to your limits and account thresholds.',
      template:       require('text!plugins/zeus-account/template/billing.html'),
      params:         {
        editor: require('text!plugins/zeus-account/template/billing-editor.html')
      },
      requiresSearch: false
    });
  };
});
