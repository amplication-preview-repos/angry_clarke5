import { ServiceStatus } from "../serviceStatus/ServiceStatus";

export type ServiceMonitor = {
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  name: string | null;
  serviceStatuses?: Array<ServiceStatus>;
  updatedAt: Date;
  url: string | null;
};
