import {Controller} from "../controller";
import {Router} from "express";
import {PaymentService} from "./payment.service";

export const PAYMENT_WH_PATH = "/stripe";

export class PaymentController implements Controller {
  router = Router();

  constructor(private service: PaymentService) {
    this.router.get(PAYMENT_WH_PATH, (req, res) => res.json(this.status()));
  }

  /**
   * Service stripe WH
   */
  status() {
    this.service.servicePayment()
    return {ok: ""};
  }
}
