import { type Request, type Response } from "express";
import UsersService from "../services/users.service";

export default class UsersController {
  constructor(private readonly service: UsersService) {}

  public createUser = async (req: Request, res: Response): Promise<Response> => {
    const { name, email, password, role } = req.body;

    const user = await this.service.createUser({ name, email, password, role });

    return res.status(201).json(user);
  }

  public getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
    const allUsers = await this.service.getAllUsers();

    return res.status(200).json(allUsers);
  }
}