import { type users } from "@prisma/client";
import IUsers from "../interface/IUsers";
import UsersModel from "../models/users.model";

export default class UsersService {
  constructor(private readonly model: UsersModel) {}

  public async createUser({ name, email, password, role }: IUsers): Promise<users> {

    console.log('FOIOIOIOI');

    const result = await this.model.createUser({ name, email, password, role });

    return result;
  }
}