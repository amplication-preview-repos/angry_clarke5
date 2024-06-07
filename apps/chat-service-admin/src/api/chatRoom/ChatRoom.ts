import { Message } from "../message/Message";
import { Participant } from "../participant/Participant";
import { User } from "../user/User";

export type ChatRoom = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  participants?: Array<Participant>;
  updatedAt: Date;
  user?: User | null;
};
