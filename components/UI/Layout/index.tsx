import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../Header";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();
  const isRoom = router.pathname.includes("/room");
  return (
    <Box bg={isRoom ? "black" : "none"} h="100vh">
      <Header />
      <Box w="100%" p={4}>
        <Head>
          <title>Google Meet clone</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>{children}</main>
      </Box>
    </Box>
  );
};
