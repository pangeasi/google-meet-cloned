import { AspectRatio, Box } from "@chakra-ui/react";
import { useAttachVideoTrack } from "./hooks";

export const VideoTrack = ({ ...props }) => {
  const videoRef = useAttachVideoTrack();
  return (
    <Box w="full">
      <AspectRatio ratio={16 / 9}>
        <video width="100%" ref={videoRef} />
      </AspectRatio>
    </Box>
  );
};
