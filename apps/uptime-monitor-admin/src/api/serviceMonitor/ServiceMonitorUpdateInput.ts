import { ServiceStatusUpdateManyWithoutServiceMonitorsInput } from "./ServiceStatusUpdateManyWithoutServiceMonitorsInput";

export type ServiceMonitorUpdateInput = {
  isActive?: boolean | null;
  name?: string | null;
  serviceStatuses?: ServiceStatusUpdateManyWithoutServiceMonitorsInput;
  url?: string | null;
};
