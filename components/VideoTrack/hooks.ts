import { useEffect, useRef } from "react";
import { createLocalVideoTrack } from "twilio-video";
import * as Video from "twilio-video";

export const useAttachVideoTrack = ({
  track,
}: {
  track?: Video.LocalVideoTrack | Video.RemoteVideoTrack;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const attachLocalVideo = async () => {
    const localVideoTrack = await createLocalVideoTrack();
    localVideoTrack.attach(videoRef.current!);
  };

  useEffect(() => {
    if (track) {
      track.attach(videoRef.current!);
    } else {
      attachLocalVideo();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return videoRef;
};
