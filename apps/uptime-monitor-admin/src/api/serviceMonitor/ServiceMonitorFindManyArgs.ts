import { ServiceMonitorWhereInput } from "./ServiceMonitorWhereInput";
import { ServiceMonitorOrderByInput } from "./ServiceMonitorOrderByInput";

export type ServiceMonitorFindManyArgs = {
  where?: ServiceMonitorWhereInput;
  orderBy?: Array<ServiceMonitorOrderByInput>;
  skip?: number;
  take?: number;
};
