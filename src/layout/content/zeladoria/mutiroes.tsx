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
  Tag,
} from "@chakra-ui/react";
import { Breadcrumbs } from "../../../components/utils/breadcrumb";
import Link from "next/link";
import { AvatarAccount } from "../../../components/utils/avatar";
import { Searchbox } from "../../../components/utils/searchbox";
import { MobileMenu } from "../../../components/utils/mobileMenu";
import { Motion, ItemMotion } from "../../../components/utils/motion";

export const Mutiroes = (props: any) => {
  const listaMutiroes = props.lista;
  return (
    <>
      <HStack
        bgImage="/bg-zeladoria.jpg"
        bgSize="cover"
        bgPosition="bottom"
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

      {/** Lista */}

      <Motion initial={ItemMotion.hidden} animate={ItemMotion.visible}>
        <HStack px={["5", "0"]} pr={["5", "5"]} pb={5} w="full">
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
                  {listaMutiroes.map((item: any, key: number) => (
                    <Tr key={key}>
                      <Td>
                        <Tag
                          size="md"
                          borderRadius="full"
                          variant="solid"
                          fontWeight="bold"
                          bgColor="teal.300"
                        >
                          {item.data_mutirao}
                        </Tag>
                      </Td>
                      <Td whiteSpace="nowrap" fontWeight="bold">
                        <Link href={"/zeladoria/mutiroes/" + item.id}>
                          {item.nome}
                        </Link>
                      </Td>
                      <Td
                        whiteSpace="nowrap"
                        display={["none", "none", "none", "table-cell"]}
                        fontWeight="bold"
                      >
                        {item.responsavel}
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
                  ))}
                </Tbody>
              </Table>
            </Flex>
          </Box>
        </HStack>
      </Motion>
    </>
  );
};
