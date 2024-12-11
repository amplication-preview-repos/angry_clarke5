import { ServiceStatusWhereInput } from "./ServiceStatusWhereInput";
import { ServiceStatusOrderByInput } from "./ServiceStatusOrderByInput";

export type ServiceStatusFindManyArgs = {
  where?: ServiceStatusWhereInput;
  orderBy?: Array<ServiceStatusOrderByInput>;
  skip?: number;
  take?: number;
};
