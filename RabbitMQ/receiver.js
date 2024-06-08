const amqp = require("amqplib");

const queue = "order";

(async () => {
  let connection;
  try {
    connection = await amqp.connect("amqp://localhost");
    let channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: true });

    await channel.consume(
      queue,
      (msg) => {
        console.log(" [x] Received %s", msg.content.toString());
      },
      { noAck: true }
    );
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
  } catch (err) {
    console.warn(err);
  }
})();


// don't close the channel, it will close the connection
// same as sending the message, all the consumers will get the message
