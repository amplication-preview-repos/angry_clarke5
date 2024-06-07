import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantCreateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  role?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
