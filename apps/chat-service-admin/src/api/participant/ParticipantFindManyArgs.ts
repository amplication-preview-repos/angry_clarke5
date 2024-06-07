import { ParticipantWhereInput } from "./ParticipantWhereInput";
import { ParticipantOrderByInput } from "./ParticipantOrderByInput";

export type ParticipantFindManyArgs = {
  where?: ParticipantWhereInput;
  orderBy?: Array<ParticipantOrderByInput>;
  skip?: number;
  take?: number;
};
