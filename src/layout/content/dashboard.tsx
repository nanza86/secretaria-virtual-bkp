import { HStack, Heading, Flex, Box, Text } from "@chakra-ui/react";
import { Breadcrumbs } from "../../components/utils/breadcrumb";
import { RiToolsFill } from "react-icons/ri";
import IconBox from "../../components/utils/iconBox";

const Card = (props) => {
  return (
    <Box p={5} shadow="base" flex="1" borderRadius="md" bgColor="white">
      <Heading fontSize="md" color="gray.300">
        {props.title}
      </Heading>
      <Flex pt="2">{props.children}</Flex>
    </Box>
  );
}

export const Dashboard = () => {
  return (
    <>
      <HStack>
        <Breadcrumbs />
      </HStack>
      <HStack pb="5">
        <Heading fontWeight="light" fontSize="30" color="teal.300">
          Dashboard
        </Heading>
      </HStack>
      <HStack
        spacing={5}
        w="full"
        alignItems="flex-start"
        alignContent="flex-start"
      >
        <Card title="Mutirões">
          <h4>Orquidário</h4>
        </Card>
      </HStack>
    </>
  );
};
