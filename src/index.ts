import {consumer, mongo} from "./context";
import {app} from "./app";
import {config} from "./utils/config";
import {logger} from "./utils/logger";

mongo.connect(config.DB_URL)
  .then(() => consumer.start(config.MESSAGING_SOURCE))
  .then(() => app.listen(config.PORT || 3000, () => logger.info("Server started")))
  .catch(e => {
    logger.error("Can not start app", e)
    throw e
  })