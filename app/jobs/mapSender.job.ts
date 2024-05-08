import kafkaSender from "../functions/kafkaSender.function";
import fs from "fs";

export default function mapSender() {
  const image = fs.readFileSync("./maps/map.png");

  const base64Image = Buffer.from(image).toString("base64");

  kafkaSender({
    topic: "rosmapPNG",
    message: base64Image,
  });
}
