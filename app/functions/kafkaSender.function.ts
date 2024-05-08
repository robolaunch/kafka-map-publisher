import kafkaClient from "../clients/kafka.client";
import logger from "./logger";

interface IKafkaMessage {
  topic: string;
  message: string;
}

export default async function kafkaSender({ topic, message }: IKafkaMessage) {
  const producer = kafkaClient.producer();

  await producer.connect();
  await producer
    .send({
      topic: topic,
      messages: [
        {
          value: message,
        },
      ],
    })
    .then(() => {
      logger("Message sent successfully.");
    });

  await producer.disconnect();
}
