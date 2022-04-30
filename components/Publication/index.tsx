import useTrack from "../../hooks/useTrack";
import * as Video from "twilio-video";
import { VideoTrack } from "../VideoTrack";
import { AudioTrack } from "../AudioTrack";

interface Props {
  publication: Video.LocalTrackPublication | Video.RemoteTrackPublication;
}

export const Publication = ({ publication }: Props) => {
  const track = useTrack(publication);

  if (!track) return null;

  if (track.kind === "video") {
    return <VideoTrack track={track} />;
  } else if (track.kind === "audio") {
    return <AudioTrack track={track} />;
  } else {
    return null;
  }
};
