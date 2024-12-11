import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserLoginCreateInput = {
  lastLoginDate?: Date | null;
  passwordHash?: string | null;
  role?: RoleWhereUniqueInput | null;
  username?: string | null;
};
