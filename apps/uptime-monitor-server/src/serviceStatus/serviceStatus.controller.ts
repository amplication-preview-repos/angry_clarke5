import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceStatusService } from "./serviceStatus.service";
import { ServiceStatusControllerBase } from "./base/serviceStatus.controller.base";

@swagger.ApiTags("serviceStatuses")
@common.Controller("serviceStatuses")
export class ServiceStatusController extends ServiceStatusControllerBase {
  constructor(protected readonly service: ServiceStatusService) {
    super(service);
  }
}
