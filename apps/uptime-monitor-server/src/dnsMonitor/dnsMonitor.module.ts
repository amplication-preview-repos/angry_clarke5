import { Module } from "@nestjs/common";
import { DnsMonitorModuleBase } from "./base/dnsMonitor.module.base";
import { DnsMonitorService } from "./dnsMonitor.service";
import { DnsMonitorController } from "./dnsMonitor.controller";
import { DnsMonitorResolver } from "./dnsMonitor.resolver";

@Module({
  imports: [DnsMonitorModuleBase],
  controllers: [DnsMonitorController],
  providers: [DnsMonitorService, DnsMonitorResolver],
  exports: [DnsMonitorService],
})
export class DnsMonitorModule {}
