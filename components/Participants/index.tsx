import { GridItem } from "@chakra-ui/react";
import useParticipants from "../../hooks/useParticipants";
import { Participant } from "../Participant";

export const Participants = () => {
  const participants = useParticipants();

  return (
    <>
      {participants.map((participant) => (
        <GridItem key={participant.sid}>
          <Participant participant={participant} />
        </GridItem>
      ))}
    </>
  );
};
