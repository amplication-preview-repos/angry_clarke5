import { DnsMonitorWhereInput } from "./DnsMonitorWhereInput";
import { DnsMonitorOrderByInput } from "./DnsMonitorOrderByInput";

export type DnsMonitorFindManyArgs = {
  where?: DnsMonitorWhereInput;
  orderBy?: Array<DnsMonitorOrderByInput>;
  skip?: number;
  take?: number;
};
