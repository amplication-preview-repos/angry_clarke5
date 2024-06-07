import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceMonitorWhereUniqueInput } from "../serviceMonitor/ServiceMonitorWhereUniqueInput";

export type ServiceStatusWhereInput = {
  checkedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  serviceMonitor?: ServiceMonitorWhereUniqueInput;
  status?: "Option1";
};
