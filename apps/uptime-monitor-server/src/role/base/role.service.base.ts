/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Role as PrismaRole,
  UserLogin as PrismaUserLogin,
} from "@prisma/client";

export class RoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RoleCountArgs, "select">): Promise<number> {
    return this.prisma.role.count(args);
  }

  async roles<T extends Prisma.RoleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoleFindManyArgs>
  ): Promise<PrismaRole[]> {
    return this.prisma.role.findMany<Prisma.RoleFindManyArgs>(args);
  }
  async role<T extends Prisma.RoleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoleFindUniqueArgs>
  ): Promise<PrismaRole | null> {
    return this.prisma.role.findUnique(args);
  }
  async createRole<T extends Prisma.RoleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoleCreateArgs>
  ): Promise<PrismaRole> {
    return this.prisma.role.create<T>(args);
  }
  async updateRole<T extends Prisma.RoleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoleUpdateArgs>
  ): Promise<PrismaRole> {
    return this.prisma.role.update<T>(args);
  }
  async deleteRole<T extends Prisma.RoleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoleDeleteArgs>
  ): Promise<PrismaRole> {
    return this.prisma.role.delete(args);
  }

  async findUserLogins(
    parentId: string,
    args: Prisma.UserLoginFindManyArgs
  ): Promise<PrismaUserLogin[]> {
    return this.prisma.role
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userLogins(args);
  }
}
