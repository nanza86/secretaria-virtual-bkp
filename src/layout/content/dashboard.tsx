import { HStack, Heading, Flex, Box } from "@chakra-ui/react";
import { Breadcrumbs } from "../../components/utils/breadcrumb";
import { RiMenuLine } from "react-icons/ri";
import IconBox from "../../components/utils/iconBox";
import { AvatarAccount } from "../../components/utils/avatar";
import { Searchbox } from "../sidebar/searchbox";
import { MobileMenu } from "../../components/utils/mobile-menu";

const Card = (props: any) => {
  return (
    <Box p={5} shadow="base" flex="1" borderRadius="md" bgColor="white">
      <Heading fontSize="md" color="gray.300">
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
            <MobileMenu/>
            <Searchbox />
          </Flex>
          <HStack justifyContent="space-between">
            <Flex flexDir="column">
              <Breadcrumbs />
              <Heading
                fontWeight={["bold", "thin"]}
                fontSize={["1.8em", "50"]}
                color="gray.500"
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
        <HStack
          spacing={5}
          w="full"
          alignItems="flex-start"
          alignContent="flex-start"
        >
          <Card title="Mutirões">
            <h4>Orquidário</h4>
          </Card>
          <Card title="Mutirões">
            <h4>Orquidário</h4>
          </Card>
        </HStack>
      </HStack>
    </>
  );
};
