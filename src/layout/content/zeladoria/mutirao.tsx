import {
  HStack,
  Heading,
  Flex,
  Box,
  Stack,
  Input,
} from "@chakra-ui/react";
import { Breadcrumbs } from "../../../components/utils/breadcrumb";
import Link from "next/link";
import { AvatarAccount } from "../../../components/utils/avatar";
import { Searchbox } from "../../../components/utils/searchbox";
import { MobileMenu } from "../../../components/utils/mobileMenu";

const Card = (props: any) => {
  return (
    <Box p={5} shadow="base" flex="1" borderRadius="md" bgColor="white">
      <Heading fontSize="md" color="gray.400">
        {props.title}
      </Heading>
      <Flex pt="2">{props.children}</Flex>
    </Box>
  );
};

export const Mutirao = () => {
  return (
    <>
      <HStack
        bgImage="../bg-flor.jpg"
        bgSize="cover"
        bgPosition="center"
        w="full"
        alignItems="flex-start"
        mb="5"
        borderBottomRadius={["2xl", "none"]}
      >
        <Flex
          bgGradient="linear(to-r, gray.50 10%, rgba(255,255,255,0) 100%)"
          pr="2em"
          py="4em"
          pl={["2em", "0em"]}
          pt={["2em", "3em"]}
          pb="2em"
          w="full"
          flexDirection="column"
        >
          <Flex
            display={["flex", "none"]}
            flexDirection="column"
            p="5"
            mb="5"
            bgColor="white"
            borderRadius="lg"
          >
            <MobileMenu />
            <Searchbox />
          </Flex>
          <HStack justifyContent="space-between">
            <Flex flexDir="column">
              <Breadcrumbs path={["Início", "Zeladoria", "Mutirões"]} />
              <Heading
                fontWeight={["bold", "thin"]}
                fontSize={["1.8em", "2.5em", "3em"]}
                color="gray.600"
              >
                Mutirão
              </Heading>
            </Flex>
            <Flex>
              <AvatarAccount />
            </Flex>
          </HStack>
        </Flex>
      </HStack>

      {/** Secretaria */}

      <HStack px={["5", "0"]} pr={["5", "5"]} pb={3} w="full">
        <Box p={5} shadow="base" w="100%" borderRadius="md" bgColor="white">
          <Flex w="full" overflowX="auto">
            <Stack spacing={3}>
              <Input placeholder="extra small size" />
            </Stack>
          </Flex>
        </Box>
      </HStack>
    </>
  );
};
