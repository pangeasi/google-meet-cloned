import { Box, GridItem } from "@chakra-ui/react";
import useParticipants from "../../hooks/useParticipants";
import usePublications from "../../hooks/usePublications";
import * as Video from "twilio-video";
import { VideoTrack } from "../VideoTrack";
import useTrack from "../../hooks/useTrack";

interface Props {
  participant: Video.Participant;
}

interface PublicationProps {
  publication: Video.LocalTrackPublication | Video.RemoteTrackPublication;
}

const Publication = ({ publication }: PublicationProps) => {
  const track = useTrack(publication);

  if (!track) return null;

  switch (track.kind) {
    case "video":
      return <VideoTrack track={track} />;
    case "audio":
      return null;
    default:
      return null;
  }
};

const Participant = ({ participant }: Props) => {
  const publications = usePublications(participant);
  return (
    <>
      {publications.map((publication) => (
        <Publication key={publication.trackSid} publication={publication} />
      ))}
    </>
  );
};

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
