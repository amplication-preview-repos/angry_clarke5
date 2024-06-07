import * as graphql from "@nestjs/graphql";
import { ServiceMonitorResolverBase } from "./base/serviceMonitor.resolver.base";
import { ServiceMonitor } from "./base/ServiceMonitor";
import { ServiceMonitorService } from "./serviceMonitor.service";

@graphql.Resolver(() => ServiceMonitor)
export class ServiceMonitorResolver extends ServiceMonitorResolverBase {
  constructor(protected readonly service: ServiceMonitorService) {
    super(service);
  }
}
