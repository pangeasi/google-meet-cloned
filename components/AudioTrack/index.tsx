import { RemoteAudioTrack, LocalAudioTrack } from "twilio-video";
import { useAttachAudioTrack } from "./hooks";
interface Props {
  track: RemoteAudioTrack | LocalAudioTrack;
}

export const AudioTrack = ({ track }: Props) => {
  const audioRef = useAttachAudioTrack({ track });
  return <audio ref={audioRef} controls hidden />;
};
