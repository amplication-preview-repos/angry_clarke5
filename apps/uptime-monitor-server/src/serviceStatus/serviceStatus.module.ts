import { Module } from "@nestjs/common";
import { ServiceStatusModuleBase } from "./base/serviceStatus.module.base";
import { ServiceStatusService } from "./serviceStatus.service";
import { ServiceStatusController } from "./serviceStatus.controller";
import { ServiceStatusResolver } from "./serviceStatus.resolver";

@Module({
  imports: [ServiceStatusModuleBase],
  controllers: [ServiceStatusController],
  providers: [ServiceStatusService, ServiceStatusResolver],
  exports: [ServiceStatusService],
})
export class ServiceStatusModule {}
