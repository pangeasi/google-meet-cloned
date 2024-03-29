import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { RemoteParticipant } from "twilio-video";
import { roomAtom } from "../atoms/room";
import { useDominantSpeaker } from "./useDominantSpeaker";

export default function useParticipants() {
  const room = useAtomValue(roomAtom);
  const dominantSpeaker = useDominantSpeaker();
  const [participants, setParticipants] = useState(
    Array.from(room?.participants.values() ?? [])
  );
  useEffect(() => {
    if (dominantSpeaker) {
      setParticipants((prevParticipants) => [
        dominantSpeaker,
        ...prevParticipants.filter(
          (participant) => participant !== dominantSpeaker
        ),
      ]);
    }
  }, [dominantSpeaker]);

  useEffect(() => {
    if (room) {
      const participantConnected = (participant: RemoteParticipant) =>
        setParticipants((prevParticipants) => [
          ...prevParticipants,
          participant,
        ]);
      const participantDisconnected = (participant: RemoteParticipant) =>
        setParticipants((prevParticipants) =>
          prevParticipants.filter((p) => p !== participant)
        );
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      return () => {
        room.off("participantConnected", participantConnected);
        room.off("participantDisconnected", participantDisconnected);
      };
    }
  }, [room]);

  return participants;
}
