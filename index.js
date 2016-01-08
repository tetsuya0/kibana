var exampleRoute = require('./server/routes/example');
module.exports = function (kibana) {
  return new kibana.Plugin({

    name: 'ciscoZeus-clock',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      app: {
        title: 'Cisco Zeus Clock',
        description: 'An awesome Kibana plugin',
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

