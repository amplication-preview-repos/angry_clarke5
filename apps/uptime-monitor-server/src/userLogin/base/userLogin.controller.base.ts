/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserLoginService } from "../userLogin.service";
import { UserLoginCreateInput } from "./UserLoginCreateInput";
import { UserLogin } from "./UserLogin";
import { UserLoginFindManyArgs } from "./UserLoginFindManyArgs";
import { UserLoginWhereUniqueInput } from "./UserLoginWhereUniqueInput";
import { UserLoginUpdateInput } from "./UserLoginUpdateInput";

export class UserLoginControllerBase {
  constructor(protected readonly service: UserLoginService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserLogin })
  async createUserLogin(
    @common.Body() data: UserLoginCreateInput
  ): Promise<UserLogin> {
    return await this.service.createUserLogin({
      data: {
        ...data,

        role: data.role
          ? {
              connect: data.role,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        lastLoginDate: true,
        passwordHash: true,

        role: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserLogin] })
  @ApiNestedQuery(UserLoginFindManyArgs)
  async userLogins(@common.Req() request: Request): Promise<UserLogin[]> {
    const args = plainToClass(UserLoginFindManyArgs, request.query);
    return this.service.userLogins({
      ...args,
      select: {
        createdAt: true,
        id: true,
        lastLoginDate: true,
        passwordHash: true,

        role: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserLogin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userLogin(
    @common.Param() params: UserLoginWhereUniqueInput
  ): Promise<UserLogin | null> {
    const result = await this.service.userLogin({
      where: params,
      select: {
        createdAt: true,
        id: true,
        lastLoginDate: true,
        passwordHash: true,

        role: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserLogin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserLogin(
    @common.Param() params: UserLoginWhereUniqueInput,
    @common.Body() data: UserLoginUpdateInput
  ): Promise<UserLogin | null> {
    try {
      return await this.service.updateUserLogin({
        where: params,
        data: {
          ...data,

          role: data.role
            ? {
                connect: data.role,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          lastLoginDate: true,
          passwordHash: true,

          role: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserLogin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserLogin(
    @common.Param() params: UserLoginWhereUniqueInput
  ): Promise<UserLogin | null> {
    try {
      return await this.service.deleteUserLogin({
        where: params,
        select: {
          createdAt: true,
          id: true,
          lastLoginDate: true,
          passwordHash: true,

          role: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
