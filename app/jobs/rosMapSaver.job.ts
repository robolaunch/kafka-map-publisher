import { exec } from "child_process";
import logger from "../functions/logger";

export default function rosMapSaver(): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    exec(
      "ros2 run nav2_map_server map_saver_cli -f ./maps/map --fmt png",
      (_, stdout, stderr) => {
        if (
          stdout?.includes("Map saved") &&
          stderr?.includes("Map saved successfully")
        ) {
          logger("Map saved successfully.");
          resolve(true);
        } else {
          logger("Error of saving map!");
          reject(false);
        }
      }
    );
  }).catch(() => false);
}
