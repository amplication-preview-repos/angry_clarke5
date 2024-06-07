import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";
import { ParticipantCreateNestedManyWithoutChatRoomsInput } from "./ParticipantCreateNestedManyWithoutChatRoomsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  name?: string | null;
  participants?: ParticipantCreateNestedManyWithoutChatRoomsInput;
  user?: UserWhereUniqueInput | null;
};
