import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  chatRoom?: ChatRoomWhereUniqueInput;
  id?: StringFilter;
  sender?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  text?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
