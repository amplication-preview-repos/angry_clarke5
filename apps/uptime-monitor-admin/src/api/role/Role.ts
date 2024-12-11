import { UserLogin } from "../userLogin/UserLogin";

export type Role = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  userLogins?: Array<UserLogin>;
};
