import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  participants?: ParticipantListRelationFilter;
  user?: UserWhereUniqueInput;
};
