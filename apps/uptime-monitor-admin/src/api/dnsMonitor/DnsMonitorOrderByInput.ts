import { SortOrder } from "../../util/SortOrder";

export type DnsMonitorOrderByInput = {
  createdAt?: SortOrder;
  domain?: SortOrder;
  id?: SortOrder;
  lastChecked?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
