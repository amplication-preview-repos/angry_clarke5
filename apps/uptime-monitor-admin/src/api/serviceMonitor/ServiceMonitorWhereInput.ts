import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ServiceStatusListRelationFilter } from "../serviceStatus/ServiceStatusListRelationFilter";

export type ServiceMonitorWhereInput = {
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  serviceStatuses?: ServiceStatusListRelationFilter;
  url?: StringNullableFilter;
};
