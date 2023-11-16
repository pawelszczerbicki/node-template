import {EventEmitter} from "../event/event.emitter";
import {EventType} from "../event/event";

export class PaymentService {
  constructor(private emitter: EventEmitter) {
  }

  servicePayment = () => this.emitter.emit({type: EventType.PAYMENT_MADE, body: ""})
}