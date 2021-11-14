import {
  HStack,
  Heading,
  Flex,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  AvatarGroup,
  Tag,
  Divider,
} from "@chakra-ui/react";
import { Breadcrumbs } from "../../../../components/utils/breadcrumb";
import Link from "next/link";
import { ArrowBackIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { AvatarAccount } from "../../../../components/utils/avatar";
import { Searchbox } from "../../../../components/utils/searchbox";
import { MobileMenu } from "../../../../components/utils/mobileMenu";
import { Motion, ItemMotion } from "../../../../components/utils/motion";
import { format, parseISO, isAfter } from "date-fns";
import { useRouter } from "next/router";

export const MutiroesList = (props: any) => {
  const listaMutiroes = props.lista;
  const router = useRouter();

  const handleClick = (url: any) => {
    router.push(url);
  };

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
            <HStack justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => router.back()}
                  colorScheme="gray"
                  variant="outline"
                >
                  <ArrowBackIcon />
                </Button>
              </Flex>
              <Flex>
                <Button
                  leftIcon={<CheckCircleIcon />}
                  colorScheme="teal"
                  variant="outline"
                  me="2"
                  onClick={() => router.push("/zeladoria/mutiroes/create")}
                >
                  Cadastrar Novo Mutirão
                </Button>
              </Flex>
            </HStack>
            <Divider my="4" />
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
                  {listaMutiroes.map((item: any, key: number) => {
                    const mutiraoAntigo = isAfter(
                      parseISO(item.data_mutirao),
                      new Date()
                    );
                    return (
                      <Tr
                        key={key}
                        onClick={() =>
                          handleClick("/zeladoria/mutiroes/" + item.id)
                        }
                        cursor="pointer"
                        _hover={{ color: "teal" }}
                      >
                        <Td>
                          <Tag
                            size="md"
                            borderRadius="full"
                            variant="solid"
                            bgColor={mutiraoAntigo ? "teal.400" : "gray"}
                          >
                            {format(parseISO(item.data_mutirao), "dd/MM/yy")}
                          </Tag>
                        </Td>
                        <Td whiteSpace="nowrap">
                          {item.concluido && <CheckCircleIcon me="2" color="teal.300" />}
                          {item.nome}
                          </Td>
                        <Td
                          whiteSpace="nowrap"
                          display={["none", "none", "none", "table-cell"]}
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
                    );
                  })}
                </Tbody>
              </Table>
            </Flex>
          </Box>
        </HStack>
      </Motion>
    </>
  );
};
