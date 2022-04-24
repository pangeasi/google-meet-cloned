import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/UI/Layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
