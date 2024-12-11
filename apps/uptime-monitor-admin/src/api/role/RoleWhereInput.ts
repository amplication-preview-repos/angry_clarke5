import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserLoginListRelationFilter } from "../userLogin/UserLoginListRelationFilter";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  userLogins?: UserLoginListRelationFilter;
};
