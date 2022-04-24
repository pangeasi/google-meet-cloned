import { Box } from "@chakra-ui/react";
import { CallActions } from "../../components/CallActions";
import { VideoTrack } from "../../components/VideoTrack";
import { useConnectTwilio } from "../../hooks/useConnectTwilio";

const Room = () => {
  const { room } = useConnectTwilio();

  return (
    <Box>
      <VideoTrack />
      <CallActions room={room!} />
    </Box>
  );
};

export default Room;
