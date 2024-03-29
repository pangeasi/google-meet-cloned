import { AspectRatio, Box } from "@chakra-ui/react";
import { useAttachVideoTrack } from "./hooks";
import * as Video from "twilio-video";
import styles from "./styles.module.css";

interface Props {
  track?: Video.LocalVideoTrack | Video.RemoteVideoTrack;
}

export const VideoTrack = ({ track }: Props) => {
  const videoRef = useAttachVideoTrack({ track });
  return (
    <Box w="full">
      <AspectRatio ratio={16 / 9}>
        <video width="100%" ref={videoRef} className={styles.videoTrack} />
      </AspectRatio>
    </Box>
  );
};
