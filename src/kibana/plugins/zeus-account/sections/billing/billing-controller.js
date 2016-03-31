define(function (require) {
  var moment = require('moment');
  var billingUtils = require('plugins/zeus-account/sections/billing/utils/billing-utils');
  require('angular-nvd3');
  var module = require('modules').get('apps/zeus-account-billing', ['kibana', 'nvd3']);
  module.controller('zeusBillingCtrl', function ($scope, Private) {
    $scope.message = 'in real time!';
    $scope.billingOptions = {
      chart: {
        type:       'historicalBarChart',
        height:     240,
        margin:     {
          top:    20,
          right:  20,
          bottom: 65,
          left:   40
        },
        x:          function (d) {
          return d[0];
        },
        y:          function (d) {
          return d[1];
        },
        showValues: true,
        duration:   100,
        xAxis:      {
          axisLabel:    'Time',
          rotateLabels: 90,
          showMaxMin:   false,
          ticks:        24,
          tickFormat:   function (d) {
            return moment(d).format('Do');
          },
        },
        yAxis:      {
          axisLabel:         'Useage',
          axisLabelDistance: -25
        },
        tooltip:    {
          keyFormatter: function (d) {
            return 'You used ' + d[1] + '% of your quota on ' + moment(d[0]).format();
          },
          duration:     0,
          distance:     25,
          enabled:      true
        }
        // zoom: {
        //   enabled: true,
        //   scaleExtent: [1,10],
        //   useFixedDomain: false,
        //   useNiceScale: true,
        //   horizontalOff: false,
        //   verticalOff: true,
        //   // unzoomEventType: "dblclick.zoom"
        // }
      }
    };
    $scope.billingData = [{
      bar:    true,
      key:    'Quantity',
      values: billingUtils.generateBillingData(30)
    }];
    console.log($scope.billingData);
    // console.log($scope.billingData.length);
    // if (!$scope.billingData || !$scope.billingData.length || !$scope.billingData.filter(function(d) { return d.values.length }).length) {
    // 	console.log("We have no data...?")
    // }
  });
});
