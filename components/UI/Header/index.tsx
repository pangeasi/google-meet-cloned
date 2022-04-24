import { Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useIsRoom } from "../../../hooks/useIsRoom";
import { CameraIcon as Logo } from "../../CameraIcon";
import Username from "../../Username";
export const Header = () => {
  const { isRoom } = useIsRoom();
  return (
    <Flex p={8} justify="space-between" wrap="wrap">
      <Link href="/">
        <a>
          <HStack fontSize={50} lineHeight={0} color="blue.400">
            <Logo />{" "}
            <Text
              color={isRoom ? "white" : "blackAlpha.500"}
              fontSize={{ base: "1.7rem", md: "2rem" }}
            >
              Google Meet clone
            </Text>
          </HStack>
        </a>
      </Link>
      <Username />
    </Flex>
  );
};
