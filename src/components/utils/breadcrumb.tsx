import { Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";

export const Breadcrumbs = () => {
  return (
    <Flex flexDir="row">
      <Text fontSize="sm" fontWeight="bold" color="gray.500" me="2" display={["none","flex"]}>Você está em:</Text>
      <Breadcrumb spacing="8px" separator={">"} fontSize="sm" fontWeight="bold" color="gray.500">
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
