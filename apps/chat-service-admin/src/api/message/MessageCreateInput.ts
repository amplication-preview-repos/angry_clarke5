import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  sender?: string | null;
  sentAt?: Date | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
