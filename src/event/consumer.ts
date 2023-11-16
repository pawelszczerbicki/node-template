import {EventHandler} from "./event.handler";
import {logger} from "../utils/logger";
import {AppEvent, EventType} from "./event";

export class ConsumerRunner {
  constructor(private handlers: EventHandler[]) {
  }

  start = (source: string) => {
    logger.info("Listening to " + source)
    const anyEvent: AppEvent = {type: EventType.USER_CREATED, body: ""}
    Promise.all(this.handlers.filter(h => h.canHandle(anyEvent)).map(h => h.handle(anyEvent)))
      .then(logger.info)
      .catch(e => {
        logger.error(e)
        throw e
      })
  }
}
