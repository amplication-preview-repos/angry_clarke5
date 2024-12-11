import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceMonitorService } from "./serviceMonitor.service";
import { ServiceMonitorControllerBase } from "./base/serviceMonitor.controller.base";

@swagger.ApiTags("serviceMonitors")
@common.Controller("serviceMonitors")
export class ServiceMonitorController extends ServiceMonitorControllerBase {
  constructor(protected readonly service: ServiceMonitorService) {
    super(service);
  }
}
