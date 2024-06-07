import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantWhereInput = {
  chatRoom?: ChatRoomWhereUniqueInput;
  id?: StringFilter;
  role?: "Option1";
  user?: UserWhereUniqueInput;
};
