export type DnsMonitor = {
  createdAt: Date;
  domain: string | null;
  id: string;
  lastChecked: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
