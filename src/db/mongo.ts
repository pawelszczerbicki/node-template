import {Db, MongoClient} from "mongodb";
import {User} from "../user/user";

const users = "users";

export class Mongo {
  public mongo: Db;
  public client: MongoClient;

  public static close = () => this.close();

  public connect = (url: string): Promise<Db> =>
    MongoClient.connect(url)
      .then((c) => (this.client = c))
      .then((c) => (this.mongo = c.db()));

  public users = () => this.mongoCollection<User>(users);
  private mongoCollection = <T>(name: string) => this.mongo.collection<T>(name);
}
