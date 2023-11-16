import {Mongo} from "../db/mongo";
import {User} from "./user";

export class UserRepo {
  constructor(private mongo: Mongo) {
  }

  create = (u: User) => this.mongo.users().insertOne(u)
}