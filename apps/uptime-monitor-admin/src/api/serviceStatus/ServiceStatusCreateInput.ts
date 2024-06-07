import { ServiceMonitorWhereUniqueInput } from "../serviceMonitor/ServiceMonitorWhereUniqueInput";

export type ServiceStatusCreateInput = {
  checkedAt?: Date | null;
  serviceMonitor?: ServiceMonitorWhereUniqueInput | null;
  status?: "Option1" | null;
};
