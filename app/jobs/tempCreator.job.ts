import { exec } from "child_process";
import logger from "../functions/logger";

export default function tempCreator(): void {
  exec(
    "mkdir maps",

    (error) => {
      if (error) {
        logger(
          error.message.includes("File exists")
            ? "./maps directory already exists"
            : "Getting error while creating directory"
        );
      } else {
        logger("Creating ./maps directory successfully.");
      }
    }
  );
}
