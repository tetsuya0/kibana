define(function (require) {
  var zeusUtils = require('utils/zeus-utils');
  var _ = require('lodash');
  var moment = require('moment');
  return {
    generateBillingData: function (n) {
      var data = [];
      for (var i = 0; i < n; i++) {
        data.push([moment().subtract(i, 'days'), _.random(45, 100)]);
      }
      console.log(data);
      return data;
    }
  };
});
