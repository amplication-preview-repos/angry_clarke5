import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UiModuleService } from "./uimodule.service";

@swagger.ApiTags("uiModules")
@common.Controller("uiModules")
export class UiModuleController {
  constructor(protected readonly service: UiModuleService) {}
}
