import { ChakraProvider, Flex, HStack, VStack } from "@chakra-ui/react";
import { theme } from "../src/styles/tema";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { Global, css } from "@emotion/react";
import { Searchbox } from "../src/components/utils/searchbox";
import { Logo } from "../src/components/utils/logo";
import { MainMenu } from "../src/layout/sidebar/accordionMenu";
import "focus-visible/dist/focus-visible";
import "../src/styles/globals.css";
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", (url) => {
  NProgress.done();
});
Router.events.on("routeChangeError", (url) => {
  NProgress.done();
});

function SecretariaVirtual({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <HStack w="full" spacing="0" alignItems="flex-start">
        {/** Sidebar */}
        <VStack
          w="18em"
          h="100vh"
          p="10"
          flexShrink={0}
          display={["none", "flex"]}
        >
          <Flex display={["none", "flex"]} flexDirection="column">
            <Logo />
            <Searchbox />
          </Flex>
          <HStack w="full">
            <MainMenu />
          </HStack>
        </VStack>
        {/** Main Content */}
        <VStack w="full" h="100vh" alignItems="flex-start">
          <Component {...pageProps} />
        </VStack>
      </HStack>
    </ChakraProvider>
  );
}
export default SecretariaVirtual;
