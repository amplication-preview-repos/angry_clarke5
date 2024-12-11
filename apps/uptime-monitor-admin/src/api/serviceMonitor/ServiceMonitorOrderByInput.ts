import { SortOrder } from "../../util/SortOrder";

export type ServiceMonitorOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
