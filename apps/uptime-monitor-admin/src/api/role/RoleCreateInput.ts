import { UserLoginCreateNestedManyWithoutRolesInput } from "./UserLoginCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  name?: string | null;
  userLogins?: UserLoginCreateNestedManyWithoutRolesInput;
};
