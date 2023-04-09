import { type Router } from "express";
import UserModel from "../models/users.model";
import UsersService from "../services/users.service";
import UsersController from "../controllers/users.controller";
import UserRoute from "../routes/user.route";

export class UserFactory {
  public static createUserRouter(): Router {
    const userModel = new UserModel();
    const userService = new UsersService(userModel);
    const userController = new UsersController(userService);
    const userRoute = new UserRoute(userController);
    userRoute._routes();
    return userRoute._router;
  }
}