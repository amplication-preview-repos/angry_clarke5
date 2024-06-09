import { SortOrder } from "../../util/SortOrder";

export type UserLoginOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastLoginDate?: SortOrder;
  passwordHash?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
