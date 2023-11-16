import {AppEvent} from "./event";
import {logger} from "../utils/logger";

export class EventEmitter {
  constructor(private destination: string) {
  }

  emit = (ev: AppEvent) => logger.info("Sending event", {ev, destination: this.destination});
}