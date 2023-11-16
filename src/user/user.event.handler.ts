import {logger} from "../utils/logger";
import {EventHandler} from "../event/event.handler";
import {AppEvent} from "../event/event";
import {UserService} from "./user.service";

export class UserEventHandler implements EventHandler {
  constructor(private service: UserService) {
  }

  canHandle = (ev: AppEvent): boolean => !!ev.type;

  handle = async (ev: AppEvent) => {
    logger.info(ev)
    await this.service.create({email: "get from event"})
  }
}
