define(function (require) {

  var _ = require('lodash');

  return {
    getRandomDate: function () {
      return Date.now();// + _.random(-100000, 100000);
    }
  };
});