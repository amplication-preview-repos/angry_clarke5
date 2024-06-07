import { ServiceStatusWhereUniqueInput } from "./ServiceStatusWhereUniqueInput";
import { ServiceStatusUpdateInput } from "./ServiceStatusUpdateInput";

export type UpdateServiceStatusArgs = {
  where: ServiceStatusWhereUniqueInput;
  data: ServiceStatusUpdateInput;
};
