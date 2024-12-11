import { ServiceMonitor } from "../serviceMonitor/ServiceMonitor";

export type ServiceStatus = {
  checkedAt: Date | null;
  createdAt: Date;
  id: string;
  serviceMonitor?: ServiceMonitor | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
