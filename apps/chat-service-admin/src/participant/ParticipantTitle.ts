import { Participant as TParticipant } from "../api/participant/Participant";

export const PARTICIPANT_TITLE_FIELD = "id";

export const ParticipantTitle = (record: TParticipant): string => {
  return record.id?.toString() || String(record.id);
};
