import * as graphql from "@nestjs/graphql";
import { ServiceStatusResolverBase } from "./base/serviceStatus.resolver.base";
import { ServiceStatus } from "./base/ServiceStatus";
import { ServiceStatusService } from "./serviceStatus.service";

@graphql.Resolver(() => ServiceStatus)
export class ServiceStatusResolver extends ServiceStatusResolverBase {
  constructor(protected readonly service: ServiceStatusService) {
    super(service);
  }
}
