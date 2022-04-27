import { Box, Grid, GridItem } from "@chakra-ui/react";
import { CallActions } from "../../components/CallActions";
import { Participants } from "../../components/Participants";
import { VideoTrack } from "../../components/VideoTrack";
import { useConnectTwilio } from "../../hooks/useConnectTwilio";

const Room = () => {
  const { room } = useConnectTwilio();

  const getDimension = (): string => {
    const participantsSize = (room?.participants.size || 0) + 1;
    if (participantsSize === 1) {
      return "100%";
    } else if (participantsSize > 1 && participantsSize <= 4) {
      return "50%";
    } else if (participantsSize > 4 && participantsSize <= 8) {
      return "33.33%";
    } else if (participantsSize > 8 && participantsSize <= 12) {
      return "25%";
    } else if (participantsSize > 12 && participantsSize <= 16) {
      return "20%";
    } else if (participantsSize > 16 && participantsSize <= 20) {
      return "16.67%";
    } else {
      return "14.29%";
    }
  };
  return (
    <Box>
      <Grid
        gridTemplateColumns={`repeat(auto-fit, minmax(${getDimension()}, 1fr) )`}
      >
        <GridItem>
          <VideoTrack />
        </GridItem>
        {room && <Participants />}
      </Grid>
      <CallActions room={room!} />
    </Box>
  );
};

export default Room;
