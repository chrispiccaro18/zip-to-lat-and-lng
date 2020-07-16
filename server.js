require('dotenv').config();
require('./lib/utils/connect')();
const app = require('./lib/app');

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on ${PORT}`);
});

// shut down server
function shutdown() {
  // NOTE: server.close is for express based apps
  // If using hapi, use `server.stop`
  server.close(function onServerClosed(err) {
    if(err) {
    // eslint-disable-next-line no-console
      console.error(err);
      process.exitCode = 1;
    }
    process.exit();
  });
}

// quit on ctrl-c when running docker in terminal
process.on('SIGINT', function onSigint() {
  // eslint-disable-next-line no-console
  console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
  shutdown();
});

// quit properly on docker stop
process.on('SIGTERM', function onSigterm() {
  // eslint-disable-next-line no-console
  console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
  shutdown();
});
