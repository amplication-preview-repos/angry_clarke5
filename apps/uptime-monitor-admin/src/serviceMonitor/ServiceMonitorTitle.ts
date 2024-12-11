import { ServiceMonitor as TServiceMonitor } from "../api/serviceMonitor/ServiceMonitor";

export const SERVICEMONITOR_TITLE_FIELD = "name";

export const ServiceMonitorTitle = (record: TServiceMonitor): string => {
  return record.name?.toString() || String(record.id);
};
