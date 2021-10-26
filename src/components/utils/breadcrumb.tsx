import {
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";

export const Breadcrumbs = () => {
  return (
    <Flex flexDir="row" textShadow="1px 1px 2px white">
      <Text
        fontSize="sm"
        fontWeight="bold"
        color="gray.600"
        me="2"
        display={["none", "flex"]}
      >
        Você está em:
      </Text>
      <Breadcrumb
        spacing="8px"
        separator={">"}
        fontSize="sm"
        fontWeight="bold"
        color="gray.600"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Início</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};
