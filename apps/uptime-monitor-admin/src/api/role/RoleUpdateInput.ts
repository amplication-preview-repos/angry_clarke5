import { UserLoginUpdateManyWithoutRolesInput } from "./UserLoginUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  name?: string | null;
  userLogins?: UserLoginUpdateManyWithoutRolesInput;
};
