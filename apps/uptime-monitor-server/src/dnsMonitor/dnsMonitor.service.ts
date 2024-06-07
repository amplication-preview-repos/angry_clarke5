import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DnsMonitorServiceBase } from "./base/dnsMonitor.service.base";

@Injectable()
export class DnsMonitorService extends DnsMonitorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
