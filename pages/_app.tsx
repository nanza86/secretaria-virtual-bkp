import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import { theme } from "../src/styles/tema";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
