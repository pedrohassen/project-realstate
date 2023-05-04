import { Router } from "express";
import type UsersController from "../controllers/users.controller";

export default class UserRoute {
  public _router: Router;

  constructor(private readonly controller: UsersController) {
    this._router = Router();
  }

  public _routes = (route = '/users'): void => {
    this._router.post(route, this.controller.createUser);
    this._router.get(route, this.controller.getAllUsers);
  }
}