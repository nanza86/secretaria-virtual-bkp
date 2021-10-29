import {
  HStack,
  Heading,
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  AvatarGroup,
  Divider,
  Badge,
  Tag,
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

export const Mutiroes = () => {
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
                Mutirões
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
            <Table w="full" variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th w="1">Data</Th>
                  <Th>Objetivo</Th>
                  <Th display={["none", "none", "none", "table-cell"]}>
                    Responsável
                  </Th>
                  <Th w="1" display={["none", "none", "none", "table-cell"]}>
                    Participantes
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Tag
                      size="md"
                      borderRadius="full"
                      variant="solid"
                      fontWeight="bold"
                      bgColor="teal.300"
                    >
                      02/10/2021
                    </Tag>
                  </Td>
                  <Td whiteSpace="nowrap" fontWeight="bold">
                    <Link href="/zeladoria/mutirao">Agrofloresta</Link>
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    display={["none", "none", "none", "table-cell"]}
                    fontWeight="bold"
                  >
                    Ronan
                  </Td>
                  <Td display={["none", "none", "none", "table-cell"]}>
                    <AvatarGroup size="sm" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Tag
                      size="md"
                      borderRadius="full"
                      variant="solid"
                      fontWeight="bold"
                      bgColor="gray.300"
                    >
                      02/10/2021
                    </Tag>
                  </Td>
                  <Td whiteSpace="nowrap">
                    <Link href="/">Orquidário</Link>
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    display={["none", "none", "none", "table-cell"]}
                  >
                    Malu
                  </Td>
                  <Td display={["none", "none", "none", "table-cell"]}>
                    <AvatarGroup size="sm" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Tag
                      size="md"
                      borderRadius="full"
                      variant="solid"
                      fontWeight="bold"
                      bgColor="gray.300"
                    >
                      02/10/2021
                    </Tag>
                  </Td>
                  <Td whiteSpace="nowrap">
                    <Link href="/">Cozinha</Link>
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    display={["none", "none", "none", "table-cell"]}
                  >
                    Vanessa
                  </Td>
                  <Td display={["none", "none", "none", "table-cell"]}>
                    <AvatarGroup size="sm" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Tag
                      size="md"
                      borderRadius="full"
                      variant="solid"
                      fontWeight="bold"
                      bgColor="gray.300"
                    >
                      02/10/2021
                    </Tag>
                  </Td>
                  <Td whiteSpace="nowrap">
                    <Link href="/">Agrofloresta</Link>
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    display={["none", "none", "none", "table-cell"]}
                  >
                    Ronan
                  </Td>
                  <Td display={["none", "none", "none", "table-cell"]}>
                    <AvatarGroup size="sm" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </Box>
      </HStack>
    </>
  );
};
