import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  chatRoomId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sender?: SortOrder;
  sentAt?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
