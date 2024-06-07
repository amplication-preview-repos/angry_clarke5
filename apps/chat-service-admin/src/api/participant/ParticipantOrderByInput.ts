import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  chatRoomId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
