import { ChatRoom } from "../chatRoom/ChatRoom";
import { Message } from "../message/Message";
import { Participant } from "../participant/Participant";
import { JsonValue } from "type-fest";

export type User = {
  chatRooms?: Array<ChatRoom>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  participants?: Array<Participant>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
