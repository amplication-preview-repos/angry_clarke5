import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { ParticipantUpdateManyWithoutChatRoomsInput } from "./ParticipantUpdateManyWithoutChatRoomsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  name?: string | null;
  participants?: ParticipantUpdateManyWithoutChatRoomsInput;
  user?: UserWhereUniqueInput | null;
};
