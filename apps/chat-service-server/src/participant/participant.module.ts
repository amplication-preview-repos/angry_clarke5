import { Module } from "@nestjs/common";
import { ParticipantModuleBase } from "./base/participant.module.base";
import { ParticipantService } from "./participant.service";
import { ParticipantController } from "./participant.controller";
import { ParticipantResolver } from "./participant.resolver";

@Module({
  imports: [ParticipantModuleBase],
  controllers: [ParticipantController],
  providers: [ParticipantService, ParticipantResolver],
  exports: [ParticipantService],
})
export class ParticipantModule {}
