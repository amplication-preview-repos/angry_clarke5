import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceMonitorServiceBase } from "./base/serviceMonitor.service.base";

@Injectable()
export class ServiceMonitorService extends ServiceMonitorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
