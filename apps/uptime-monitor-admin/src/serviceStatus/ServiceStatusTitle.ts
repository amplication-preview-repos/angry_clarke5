import { ServiceStatus as TServiceStatus } from "../api/serviceStatus/ServiceStatus";

export const SERVICESTATUS_TITLE_FIELD = "id";

export const ServiceStatusTitle = (record: TServiceStatus): string => {
  return record.id?.toString() || String(record.id);
};
