import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceStatusServiceBase } from "./base/serviceStatus.service.base";

@Injectable()
export class ServiceStatusService extends ServiceStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
