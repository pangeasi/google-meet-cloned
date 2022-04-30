import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { roomAtom } from "../../atoms/room";
import { useDimensionGrid } from "../../hooks/useDimensionGrid";
import { CallActions } from "../CallActions";
import { Participant } from "../Participant";
import { Participants } from "../Participants";

export const RoomComponent = () => {
  const room = useAtomValue(roomAtom);
  const percentage = useDimensionGrid();
  return (
    <Box m={2}>
      {room && (
        <Grid
          gridTemplateColumns={`repeat(auto-fit, minmax(${percentage}, 1fr))`}
        >
          <GridItem>
            <Participant participant={room.localParticipant} />
          </GridItem>
          <Participants />
        </Grid>
      )}
      <CallActions room={room!} />
    </Box>
  );
};
