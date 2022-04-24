import { RefObject, useEffect, useRef } from "react";
import { createLocalVideoTrack } from "twilio-video";

export const useAttachVideoTrack = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const attachLocalVideo = async (videoRef: RefObject<HTMLVideoElement>) => {
    const localVideoTrack = await createLocalVideoTrack();
    localVideoTrack.attach(videoRef.current!);
  };

  useEffect(() => {
    attachLocalVideo(videoRef);
  }, []);

  return videoRef;
};
