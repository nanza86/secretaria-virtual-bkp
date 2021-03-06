import { HStack, Heading, Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import { Breadcrumbs } from "../../components/utils/breadcrumb";
import {
  CardAniversariantes,
  CardOrquidario,
  CardPresenca,
  CardTrabalhos,
} from "../../components/cards";
import { AvatarAccount } from "../../components/utils/avatar";
import { Searchbox } from "../../components/utils/searchbox";
import { MobileMenu } from "../../components/utils/mobileMenu";
import {
  Motion,
  ItemMotion,
} from "../../components/utils/motion";

export const Dashboard = () => {
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
              <Breadcrumbs path={["Início", "Dashboard"]} />
              <Heading
                fontWeight={["bold", "thin"]}
                fontSize={["1.8em", "2.5em", "3em"]}
                color="gray.600"
              >
                Dashboard
              </Heading>
            </Flex>
            <Flex>
              <AvatarAccount />
            </Flex>
          </HStack>
        </Flex>
      </HStack>

      {/** Secretaria */}
      <Motion initial={ItemMotion.hidden} animate={ItemMotion.visible}>
        <HStack px={["5", "0"]} pr={["5", "5"]} pb={3} w="full">
          <Grid gap={5} w="full" templateColumns="2.5fr 1.5fr">
            <GridItem colSpan={[2, 2, 1]}>
              <CardPresenca
                dados={[
                  {
                    name: "Fardados",
                    data: [20, 10, 15, 10, 19, 10, 20, 10, 15, 10, 0, 0],
                  },
                  {
                    name: "Visitantes",
                    data: [10, 20, 5, 3, 5, 1, 20, 10, 15, 10, 0, 0],
                  },
                ]}
              />
            </GridItem>
            <GridItem colSpan={[2, 2, 1]}>
              <CardOrquidario />
            </GridItem>
          </Grid>
        </HStack>
        
        {/** Proximos trabalhos e Aniversariantes */}
        <HStack px={["5", "0"]} pr={["5", "5"]} pb="5" w="full">
          <Grid gap={5} w="full" templateColumns="2.5fr 1.5fr">
            <GridItem colSpan={[2, 2, 1]}>
              <CardTrabalhos
                dados={[
                  { data: "30/10", trabalho: "Concentração" },
                  { data: "02/11", trabalho: "Santa Missa" },
                  { data: "03/11", trabalho: "Finados" },
                  { data: "15/11", trabalho: "Concentração" },
                ]}
              />
            </GridItem>
            <GridItem colSpan={[2, 2, 1]}>
              <CardAniversariantes
                dados={[
                  {
                    data: "30/10",
                    nome: "Vinicius",
                    img: "https://bit.ly/ryan-florence",
                  },
                  {
                    data: "02/11",
                    nome: "Vilma",
                    img: "https://bit.ly/kent-c-dodds",
                  },
                  {
                    data: "03/11",
                    nome: "Thaisa",
                    img: "https://bit.ly/sage-adebayo",
                  },
                  {
                    data: "15/11",
                    nome: "Sidarta",
                    img: "https://bit.ly/prosper-baba",
                  },
                ]}
              />
            </GridItem>
          </Grid>
        </HStack>
      </Motion>
    </>
  );
};
