import {User} from "./user";
import {UserRepo} from "./user.repo";

export class UserService {
  constructor(private repo: UserRepo) {
  }

  create = (u: User) => this.repo.create(u)
}