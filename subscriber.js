const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883'); // Adjust the hostname and port as needed

client.on('connect', function () {
  console.log('Connected to MQTT broker');

  // Subscribe to a topic
  const topic = 'test/temp';
  client.subscribe(topic);

  console.log(`Subscribed to topic: ${topic}`);
});

// Handle incoming messages
client.on('message', function (topic, message) {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);

  // You can add your own logic to process the received message here
});

// Handle errors
client.on('error', function (error) {
  console.error('Error:', error);
});
