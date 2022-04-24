import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CameraIcon as Logo } from "../../CameraIcon";
export const Header = () => {
  const router = useRouter();
  const isRoom = router.pathname.includes("/room");
  return (
    <Flex p={4}>
      <Link href="/">
        <a>
          <HStack fontSize={50} lineHeight={0} color="blue.400">
            <Logo />{" "}
            <Text color={isRoom ? "white" : "blackAlpha.500"} fontSize={40}>
              Google Meet clone
            </Text>
          </HStack>
        </a>
      </Link>
    </Flex>
  );
};
