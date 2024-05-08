import kafkaAdminClient from "../clients/kafkaAdmin.client";

export default async function createKafkaTopic() {
  await kafkaAdminClient.connect();

  await kafkaAdminClient.createTopics({
    topics: [
      {
        topic: "rosmapPNG",
        numPartitions: 1,
        replicationFactor: 1,
      },
      {
        topic: "rosmapYAML",
        numPartitions: 1,
        replicationFactor: 1,
      },
    ],
  });

  await kafkaAdminClient.disconnect();
}
