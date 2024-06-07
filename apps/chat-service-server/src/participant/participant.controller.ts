import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParticipantService } from "./participant.service";
import { ParticipantControllerBase } from "./base/participant.controller.base";

@swagger.ApiTags("participants")
@common.Controller("participants")
export class ParticipantController extends ParticipantControllerBase {
  constructor(protected readonly service: ParticipantService) {
    super(service);
  }
}
