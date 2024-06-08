const amqp = require("amqplib");

const queue = "order";
const text = {
  item_id: "macbook",
  text: "This is a sample message to send receiver to check the ordered Item Availablility",
};

const sendeMessage = async () => {
  let connection;
  try {
    connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(text)));
    console.log(" [x] Sent '%s'", text);
    await channel.close();
  } catch (err) {
    console.warn(err);
  } finally {
    if (connection) await connection.close();
  }
}

for(let i = 0; i < 50; i++){
    sendeMessage();
}

// the paramter {durable : true} makes the queue durable. so when receiver is down, the queue message will be not be deleted and sure to send when consumer is up again. making it {durable : false} will make the queue non-durable.