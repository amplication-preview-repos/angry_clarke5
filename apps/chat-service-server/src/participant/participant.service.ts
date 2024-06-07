import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParticipantServiceBase } from "./base/participant.service.base";

@Injectable()
export class ParticipantService extends ParticipantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
