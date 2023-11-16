import {HealthController} from "./health/health.controller";
import {ConsumerRunner} from "./event/consumer";
import {EventHandler} from "./event/event.handler";
import {UserEventHandler} from "./user/user.event.handler";
import {Controller} from "./controller";
import {PaymentController} from "./payment/payment.controller";
import {EventEmitter} from "./event/event.emitter";
import {config} from "./utils/config";
import {PaymentService} from "./payment/payment.service";
import {Mongo} from "./db/mongo";
import {UserService} from "./user/user.service";
import {UserRepo} from "./user/user.repo";

export const mongo = new Mongo()
const notificationEmitter = new EventEmitter(config.MESSAGING_DESTINATION);
const paymentService = new PaymentService(notificationEmitter)
const userRepo = new UserRepo(mongo)
const userService = new UserService(userRepo)

export const controllers = [
  new HealthController(),
  new PaymentController(paymentService),
].map((c: Controller) => c.router);

const handlers: EventHandler[] = [new UserEventHandler(userService)]
export const consumer = new ConsumerRunner(handlers)