import type { NextPage } from "next";
import { HStack, VStack, Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { MainMenu } from "../src/layout/sidebar/accordion-menu";
import { Logo } from "../src/layout/sidebar/logo";
import { Dashboard } from "../src/layout/content/dashboard";
import { Searchbox } from "../src/layout/sidebar/searchbox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Secretaria Virtual Flor de Jagube</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HStack w="full" spacing="0" alignItems="flex-start">
        {/** Sidebar */}
        <VStack w="18em" h="100vh" p="10" flexShrink={0}>
          <Logo/>
          <Searchbox/>
          <HStack w="full">
            <MainMenu />
          </HStack>
        </VStack>
        {/** Main Content */}
        <VStack w="full" h="100vh" alignItems="flex-start" p="10">
          <Dashboard/>
        </VStack>
      </HStack>
    </>
  );
};

export default Home;
