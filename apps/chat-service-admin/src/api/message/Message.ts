import { ChatRoom } from "../chatRoom/ChatRoom";
import { User } from "../user/User";

export type Message = {
  chatRoom?: ChatRoom | null;
  createdAt: Date;
  id: string;
  sender: string | null;
  sentAt: Date | null;
  text: string | null;
  updatedAt: Date;
  user?: User | null;
};
