import kafkaSender from "../functions/kafkaSender.function";
import fs from "fs";

export default function mapSender() {
  const yaml = fs.readFileSync("./maps/map.yaml");

  kafkaSender({
    topic: "rosmapYAML",
    message: yaml.toString(),
  });
}
