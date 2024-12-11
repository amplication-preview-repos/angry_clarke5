import { ServiceStatusCreateNestedManyWithoutServiceMonitorsInput } from "./ServiceStatusCreateNestedManyWithoutServiceMonitorsInput";

export type ServiceMonitorCreateInput = {
  isActive?: boolean | null;
  name?: string | null;
  serviceStatuses?: ServiceStatusCreateNestedManyWithoutServiceMonitorsInput;
  url?: string | null;
};
