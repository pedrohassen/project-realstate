import { type Request, type Response } from "express";
import UsersService from "../services/users.service";

export default class UsersController {
  constructor(private readonly service: UsersService) {}

  public async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password, role } = req.body;

    console.log(name);

    const user = await this.service.createUser({ name, email, password, role });

    return res.status(201).json(user);
  }
}