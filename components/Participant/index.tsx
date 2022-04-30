import { Box, Text } from "@chakra-ui/react";
import * as Video from "twilio-video";
import usePublications from "../../hooks/usePublications";
import { Publication } from "../Publication";

interface Props {
  participant: Video.Participant;
}

export const Participant = ({ participant }: Props) => {
  const publications = usePublications(participant);
  return (
    <Box>
      <Text color="white" position="relative" top={10} left={5} zIndex={2}>
        {participant.identity}
      </Text>
      {publications.map((publication) => (
        <Box key={publication.trackSid} m={2}>
          <Publication publication={publication} />
        </Box>
      ))}
    </Box>
  );
};
