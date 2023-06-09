import { type users } from "@prisma/client";
import IUsers from "../interface/IUsers";
import UsersModel from "../models/users.model";

export default class UsersService {
  constructor(private readonly model: UsersModel) {}

  public createUser = async ({ name, email, password, role }: IUsers): Promise<users> => {

    const result = await this.model.createUser({ name, email, password, role });

    return result;
  }

  public getAllUsers = async (): Promise<IUsers[]> => {
    const result = await this.model.getAllUsers();
    
    return result;
  }
}