import { Flex, IconButton } from "@chakra-ui/react";
import { FiPhoneOff } from "react-icons/fi";
import * as Video from "twilio-video";

interface Props {
  room: Video.Room;
}

export const CallActions = ({ room }: Props) => {
  return (
    <Flex w="full" justify="center" position="fixed" bottom={20}>
      <IconButton
        size="lg"
        onClick={() => room.disconnect()}
        aria-label="disconnect"
        rounded="full"
        color="white"
        bg="red.500"
        icon={<FiPhoneOff />}
      />
    </Flex>
  );
};
