module.exports = function (server) {

  server.route({
    path: '/ciscoZeus-clock/api/example',
    method: 'GET',
    handler: function (req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
