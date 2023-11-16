import {Controller} from "../controller";
import {Router} from "express";
import {Example, OperationId, Post, Response, Tags} from "tsoa";

export const HEALTH_PATH = "/";

export class HealthController implements Controller {
  router = Router();

  constructor() {
    this.router.get(HEALTH_PATH, (req, res) => res.json(this.status()));
  }

  /**
   * Check service health status
   */
  @OperationId("health")
  @Tags("health")
  @Post("/")
  @Response<{ health: string }>(200)
  @Example<{ health: string }>({health: "up"})
  status() {
    return {health: "up"};
  }
}
