import type { NextPage } from "next";
import { motion } from "framer-motion";
import { HStack, VStack, Flex, chakra } from "@chakra-ui/react";
import Head from "next/head";
import { MainMenu } from "../../src/layout/sidebar/accordionMenu";
import { Logo } from "../../src/components/utils/logo";
import { Mutiroes } from "../../src/layout/content/zeladoria/mutiroes";
import { Searchbox } from "../../src/components/utils/searchbox";

const MotionBox = chakra(motion.div);
const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hidden: { opacity: 0, y: -20 },
};

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
          <MotionBox w="full" initial="hidden" animate="visible" variants={variants}>
            <Mutiroes />
          </MotionBox>
        </VStack>
      </HStack>
    </>
  );
};

export default ZeladoriaMutiroes;
