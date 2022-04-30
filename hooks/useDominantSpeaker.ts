import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { RemoteParticipant } from "twilio-video";
import { roomAtom } from "../atoms/room";

export const useDominantSpeaker = () => {
  const room = useAtomValue(roomAtom);
  const [dominantSpeaker, setDominantSpeaker] = useState(
    room?.dominantSpeaker ?? null
  );

  useEffect(() => {
    if (room) {
      const handleDominantSpeakerChanged = (
        newDominantSpeaker: RemoteParticipant
      ) => {
        if (newDominantSpeaker !== null) {
          setDominantSpeaker(newDominantSpeaker);
        }
      };

      const handleParticipantDisconnected = (
        participant: RemoteParticipant
      ) => {
        setDominantSpeaker((prevDominantSpeaker) => {
          return prevDominantSpeaker === participant
            ? null
            : prevDominantSpeaker;
        });
      };

      room.on("dominantSpeakerChanged", handleDominantSpeakerChanged);
      room.on("participantDisconnected", handleParticipantDisconnected);
      return () => {
        room.off("dominantSpeakerChanged", handleDominantSpeakerChanged);
        room.off("participantDisconnected", handleParticipantDisconnected);
      };
    }
  }, [room]);

  return dominantSpeaker;
};
