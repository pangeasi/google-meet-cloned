import { Box, Button, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { CameraIcon } from "../CameraIcon";
import dynamic from "next/dynamic";
import { useRandomRoomName } from "./hooks";
import { useRouter } from "next/router";

const NewMeet = () => {
  const router = useRouter();
  const [roomName, roomNameSet] = useRandomRoomName();

  return (
    <Box maxW="2xl" h="fit-content" shadow="2xl" mt={8} p={10}>
      <VStack align="start" mb={24}>
        <Text fontSize="4xl">Videollamadas gratis para tod@s</Text>
        <Text fontSize="xl">
          Ahora la mejor comunidad de desarrolladores tiene su propio servicio
          de videollamadas, usalo de forma gratuita por todo el mundo.
        </Text>
      </VStack>
      <Stack direction={{ base: "column", md: "row" }} mb={10}>
        <Input
          value={roomName}
          onChange={(ev) => roomNameSet(ev.target.value)}
        />
        <Button
          minW={180}
          onClick={() => router.push(`/room/${roomName}`)}
          leftIcon={<CameraIcon />}
          bg="blue.500"
          color="white"
        >
          Nueva reunión
        </Button>
      </Stack>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(NewMeet), { ssr: false });
