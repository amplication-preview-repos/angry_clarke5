import { ChatRoomListRelationFilter } from "../chatRoom/ChatRoomListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";

export type UserWhereInput = {
  chatRooms?: ChatRoomListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  participants?: ParticipantListRelationFilter;
  username?: StringFilter;
};
