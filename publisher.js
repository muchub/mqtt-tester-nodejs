const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883'); // Adjust the hostname and port as needed

client.on('connect', function () {
  console.log('Connected to MQTT broker');

  // Publish a message to a topic
  const topic = 'test/topic';
  const message = 'hi';
  client.publish(topic, message);

  console.log(`Message published to ${topic}: ${message}`);

  // Disconnect after publishing
  client.end();
});
