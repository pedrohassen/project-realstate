import { PrismaClient, type users } from "@prisma/client";
import IUsers from "../interface/IUsers";

export default class UsersModel {
  private readonly _prisma: PrismaClient;

  constructor() {
    this._prisma = new PrismaClient();
  }

  public createUser = async ({ name, email, password, role }: IUsers): Promise<users> => {
    return await this._prisma.users.create({
      data: {
        name,
        email,
        password,
        role
      }
    });
  }

  public getAllUsers = async (): Promise<IUsers[]> => {
    return await this._prisma.users.findMany();
  }
}