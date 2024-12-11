import { DnsMonitor as TDnsMonitor } from "../api/dnsMonitor/DnsMonitor";

export const DNSMONITOR_TITLE_FIELD = "domain";

export const DnsMonitorTitle = (record: TDnsMonitor): string => {
  return record.domain?.toString() || String(record.id);
};
