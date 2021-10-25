import type { NextPage } from "next";
import { HStack, VStack, Box, Heading } from "@chakra-ui/react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Secretaria Virtual Flor de Jagube</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HStack w="full" spacing="0" alignItems="flex-start">
        <VStack w="20em" h="100vh" bg="red" p="10">
          <HStack>
            <Heading fontSize="1.2em">Secretaria Virtual Flor de Jagube</Heading>
          </HStack>
        </VStack>
        <VStack w="full" h="100vh" bg="yellow">
          <Box>Main</Box>
        </VStack>
      </HStack>
    </>
  );
};

export default Home;
