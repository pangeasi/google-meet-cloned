import { Box, Flex, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import meeting from "../../assets/meeting.png";
import NewMeet from "../components/NewMeet";

const Home: NextPage = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-around"
      m={{ base: 0, md: 10 }}
      gap={10}
    >
      <NewMeet />
      <Box>
        <Image
          objectFit="contain"
          maxH="500px"
          src="/assets/meet.png"
          alt="meeting illustration"
        />
      </Box>
    </Flex>
  );
};

export default Home;
