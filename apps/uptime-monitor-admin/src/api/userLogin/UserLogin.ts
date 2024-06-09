import { Role } from "../role/Role";

export type UserLogin = {
  createdAt: Date;
  id: string;
  lastLoginDate: Date | null;
  passwordHash: string | null;
  role?: Role | null;
  updatedAt: Date;
  username: string | null;
};
