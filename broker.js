const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883; // MQTT default port

server.listen(port, function () {
  console.log(`MQTT broker listening on port ${port}`);
});

// Optional: You can handle events (e.g., client connection, message publication) as needed.
aedes.on('client', function (client) {
  console.log('Client connected:', client.id);
});

aedes.on('publish', function (packet, client) {
  if (client) {
    console.log(`Message from ${client.id}:`, packet.payload.toString());
  }
});
