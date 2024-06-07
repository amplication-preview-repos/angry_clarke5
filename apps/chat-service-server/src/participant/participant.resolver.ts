import * as graphql from "@nestjs/graphql";
import { ParticipantResolverBase } from "./base/participant.resolver.base";
import { Participant } from "./base/Participant";
import { ParticipantService } from "./participant.service";

@graphql.Resolver(() => Participant)
export class ParticipantResolver extends ParticipantResolverBase {
  constructor(protected readonly service: ParticipantService) {
    super(service);
  }
}
