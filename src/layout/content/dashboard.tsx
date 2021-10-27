import {
  HStack,
  Heading,
  Flex,
  Box,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { Breadcrumbs } from "../../components/utils/breadcrumb";
import { RiMenuLine } from "react-icons/ri";
import IconBox from "../../components/utils/iconBox";
import { CardAniversariantes, CardTrabalhos } from "./cards";
import { AvatarAccount } from "../../components/utils/avatar";
import { Searchbox } from "../../components/utils/searchbox";
import { MobileMenu } from "../../components/utils/mobile-menu";

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
              <Breadcrumbs />
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
      <HStack px={["5", "0"]} pr={["5", "5"]} w="full">
        <SimpleGrid gap={5} w="full" columns={{ sm: 1, md: 2, xl: 3 }} gridAutoFlow="row" >
          <GridItem minH="100%">
            <CardTrabalhos
              dados={[
                { data: "30/10", trabalho: "Concentração" },
                { data: "02/11", trabalho: "Santa Missa" },
                { data: "03/11", trabalho: "Finados" },
                { data: "15/11", trabalho: "Concentração" },
              ]}
            />
          </GridItem>
          <GridItem minH="100%">
            <CardAniversariantes
              dados={[
                { data: "30/10", nome: "Vinicius", img:"https://bit.ly/ryan-florence" },
                { data: "02/11", nome: "Vilma", img:"https://bit.ly/kent-c-dodds" },
                { data: "03/11", nome: "Thaisa", img:"https://bit.ly/sage-adebayo" },
                { data: "15/11", nome: "Sidarta", img:"https://bit.ly/prosper-baba" },
              ]}
            />
          </GridItem>
          <GridItem minH="100%">
            <CardTrabalhos
              title="Próximos Trabalhos"
              arrs={[1,2,3,4,5]}
              dados={[
                { data: "30/10", trabalho: "Concentração" },
                { data: "02/11", trabalho: "Santa Missa" },
                { data: "03/11", trabalho: "Finados" },
                { data: "15/11", trabalho: "Concentração" },
              ]}
            />
          </GridItem>
        </SimpleGrid>
      </HStack>
    </>
  );
};
