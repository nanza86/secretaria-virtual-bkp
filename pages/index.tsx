import type { NextPage } from "next";
import { HStack, VStack, Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { MainMenu } from "../src/layout/sidebar/accordion-menu";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Secretaria Virtual Flor de Jagube</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HStack w="full" spacing="0" alignItems="flex-start">
        {/** Sidebar */}
        <VStack w="20em" h="100vh" p="10">
          <VStack alignItems="flex-start">
            <Heading fontSize="md" fontWeight="bold">Secretaria Virtual</Heading>
            <Heading fontSize="sm" fontWeight="normal" pb="2">Flor de Jagube</Heading>
          </VStack>
          <HStack w="full">
            <MainMenu />
          </HStack>
        </VStack>
        {/** Main Content */}
        <VStack w="full" h="100vh">
          <HStack>
            <Box>Main</Box>
          </HStack>
        </VStack>
      </HStack>
    </>
  );
};

export default Home;
