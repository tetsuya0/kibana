var exampleRoute = require('./server/routes/example');
module.exports = function (kibana) {
  return new kibana.Plugin({

    name: 'ciscoZeus-clock',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      visTypes: [
        'plugins/ciscoZeus-clock/clock'
      ],
      app: {
        title: 'Cisco Zeus Clock',
        description: 'tr-k4p-clock implementation.1',
        main: 'plugins/ciscoZeus-clock/app',
        injectVars: function (server, options) {
          var config = server.config();
          return {
            kbnIndex: config.get('kibana.index'),
            esApiVersion: config.get('elasticsearch.apiVersion'),
            esShardTimeout: config.get('elasticsearch.shardTimeout')
          };
        }
      }
    },

    config: function (Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init: function (server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }

  });
};

