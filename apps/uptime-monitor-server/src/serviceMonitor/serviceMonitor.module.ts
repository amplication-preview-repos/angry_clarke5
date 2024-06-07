import { Module } from "@nestjs/common";
import { ServiceMonitorModuleBase } from "./base/serviceMonitor.module.base";
import { ServiceMonitorService } from "./serviceMonitor.service";
import { ServiceMonitorController } from "./serviceMonitor.controller";
import { ServiceMonitorResolver } from "./serviceMonitor.resolver";

@Module({
  imports: [ServiceMonitorModuleBase],
  controllers: [ServiceMonitorController],
  providers: [ServiceMonitorService, ServiceMonitorResolver],
  exports: [ServiceMonitorService],
})
export class ServiceMonitorModule {}
