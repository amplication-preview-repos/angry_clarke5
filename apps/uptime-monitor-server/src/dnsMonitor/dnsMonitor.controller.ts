import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DnsMonitorService } from "./dnsMonitor.service";
import { DnsMonitorControllerBase } from "./base/dnsMonitor.controller.base";

@swagger.ApiTags("dnsMonitors")
@common.Controller("dnsMonitors")
export class DnsMonitorController extends DnsMonitorControllerBase {
  constructor(protected readonly service: DnsMonitorService) {
    super(service);
  }
}
