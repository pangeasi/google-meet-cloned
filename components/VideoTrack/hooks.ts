import { useEffect, useRef } from "react";
import { LocalVideoTrack, RemoteVideoTrack } from "twilio-video";

interface AttachVideoTrack {
  track: LocalVideoTrack | RemoteVideoTrack | undefined;
}

export const useAttachVideoTrack = ({ track }: AttachVideoTrack) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (track) {
      track.attach(videoRef.current!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return videoRef;
};
