import { Box, Circle, HStack, Text } from "@chakra-ui/react";
import * as Video from "twilio-video";
import { useDominantSpeaker } from "../../hooks/useDominantSpeaker";
import usePublications from "../../hooks/usePublications";
import { Publication } from "../Publication";

interface Props {
  participant: Video.Participant;
}

export const Participant = ({ participant }: Props) => {
  const publications = usePublications(participant);
  const dominantSpeaker = useDominantSpeaker();

  return (
    <Box>
      <HStack position="relative" top={10} left={5} zIndex={2}>
        <Text color="white">{participant.identity}</Text>
        <Circle
          bg={
            participant.identity === dominantSpeaker?.identity
              ? "green.400"
              : "red.400"
          }
          size={2}
        />
      </HStack>
      {publications.map((publication) => (
        <Box key={publication.trackSid} m={2}>
          <Publication publication={publication} />
        </Box>
      ))}
    </Box>
  );
};
