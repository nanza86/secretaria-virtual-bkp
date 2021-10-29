import type { NextPage } from "next";
import { HStack, VStack, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { MainMenu } from "../../src/layout/sidebar/accordionMenu";
import { Logo } from "../../src/components/utils/logo";
import { Mutiroes } from "../../src/layout/content/zeladoria/mutiroes";
import { Searchbox } from "../../src/components/utils/searchbox";

const ZeladoriaMutiroes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Secretaria Virtual Flor de Jagube</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HStack w="full" spacing="0" alignItems="flex-start">
        {/** Sidebar */}
        <VStack
          w="18em"
          h="100vh"
          p="10"
          flexShrink={0}
          display={["none", "flex"]}
        >
          <Flex display={["none","flex"]} flexDirection="column">
            <Logo />
            <Searchbox />
          </Flex>
          <HStack w="full">
            <MainMenu />
          </HStack>
        </VStack>
        {/** Main Content */}
        <VStack w="full" h="100vh" alignItems="flex-start">
          <Mutiroes />
        </VStack>
      </HStack>
    </>
  );
};

export default ZeladoriaMutiroes;
