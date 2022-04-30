import { useEffect, useRef } from "react";
import { LocalAudioTrack, RemoteAudioTrack } from "twilio-video";

interface AttachAudioTrack {
  track: LocalAudioTrack | RemoteAudioTrack | undefined;
}

export const useAttachAudioTrack = ({ track }: AttachAudioTrack) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (track) {
      track.attach(audioRef.current!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return audioRef;
};
