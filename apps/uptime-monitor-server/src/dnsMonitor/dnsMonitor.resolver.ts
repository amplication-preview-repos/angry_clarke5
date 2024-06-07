import * as graphql from "@nestjs/graphql";
import { DnsMonitorResolverBase } from "./base/dnsMonitor.resolver.base";
import { DnsMonitor } from "./base/DnsMonitor";
import { DnsMonitorService } from "./dnsMonitor.service";

@graphql.Resolver(() => DnsMonitor)
export class DnsMonitorResolver extends DnsMonitorResolverBase {
  constructor(protected readonly service: DnsMonitorService) {
    super(service);
  }
}
