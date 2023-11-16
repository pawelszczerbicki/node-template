import {AppEvent} from "./event";

export interface EventHandler<T = AppEvent> {
  handle(ev: T): Promise<void> | void;
  canHandle(ev: T): boolean;
}