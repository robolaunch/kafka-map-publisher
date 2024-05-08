import createKafkaTopic from "./functions/createKafkaTopic.function";
import mapSender from "./jobs/mapSender.job";
import rosMapSaver from "./jobs/rosMapSaver.job";
import tempCreator from "./jobs/tempCreator.job";

async function handlePreparation() {
  //   await createKafkaTopic();
  await tempCreator();
}

async function jobScheduler() {
  setInterval(async () => {
    if (await rosMapSaver()) {
      await mapSender();
    }
  }, 5000);
}

async function main() {
  await handlePreparation();
  await jobScheduler();
}

main();
