import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DnsMonitorWhereInput = {
  domain?: StringNullableFilter;
  id?: StringFilter;
  lastChecked?: DateTimeNullableFilter;
  status?: "Option1";
};
