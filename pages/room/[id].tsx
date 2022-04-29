import { Center, Flex, Spinner } from "@chakra-ui/react";
import { RoomComponent } from "../../components/Room";
import { useConnectTwilio } from "../../hooks/useConnectTwilio";

const Room = () => {
  const { room } = useConnectTwilio();

  return room ? (
    <RoomComponent />
  ) : (
    <Center h="70vh">
      <Spinner size="xl" color="white" />
    </Center>
  );
};

export default Room;
