import { SortOrder } from "../../util/SortOrder";

export type ServiceStatusOrderByInput = {
  checkedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  serviceMonitorId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
