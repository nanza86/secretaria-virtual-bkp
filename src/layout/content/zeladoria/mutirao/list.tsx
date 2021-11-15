import {
  HStack,
  Heading,
  Flex,
  Box,
  Button,
  SimpleGrid,
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
import { CardMutirao } from "../../../../components/cards";

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
            <SimpleGrid minChildWidth="250px" spacing="20px">
              {listaMutiroes.map((item: any, key: number) => {
                const mutiraoAntigo = isAfter(
                  parseISO(item.data_mutirao),
                  new Date()
                );
                return (
                  <Flex
                    key={key}
                    onClick={() =>
                      handleClick("/zeladoria/mutiroes/" + item.id)
                    }
                    cursor="pointer"
                    _hover={{ background: "white" }}
                  >
                    <CardMutirao
                      concluido={item.concluido}
                      nome={item.nome}
                      descricao={item.descricao}
                      data={format(parseISO(item.data_mutirao), "dd/MM/yy")}
                      antigo={mutiraoAntigo}
                      responsavel={item.responsavel}
                    />
                  </Flex>
                );
              })}
            </SimpleGrid>
          </Box>
        </HStack>
      </Motion>
    </>
  );
};
