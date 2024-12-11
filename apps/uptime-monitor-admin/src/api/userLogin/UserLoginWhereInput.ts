import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserLoginWhereInput = {
  id?: StringFilter;
  lastLoginDate?: DateTimeNullableFilter;
  passwordHash?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  username?: StringNullableFilter;
};
