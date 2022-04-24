import { Box, Flex, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Meeting } from "../assets/Meeting";
import NewMeet from "../components/NewMeet";

const Home: NextPage = () => {
  return (
    <Flex justify="space-around" mt={20} gap={20} wrap="wrap">
      <NewMeet />
      <Box>
        <Meeting />
      </Box>
    </Flex>
  );
};

export default Home;
