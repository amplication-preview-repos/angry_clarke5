import { ServiceMonitorWhereUniqueInput } from "../serviceMonitor/ServiceMonitorWhereUniqueInput";

export type ServiceStatusUpdateInput = {
  checkedAt?: Date | null;
  serviceMonitor?: ServiceMonitorWhereUniqueInput | null;
  status?: "Option1" | null;
};
