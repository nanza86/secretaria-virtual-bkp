import { Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export const Breadcrumbs = () => {
  return (
    <>
      <Text fontSize="sm" color="gray.400">Você está em:</Text>
      <Breadcrumb spacing="8px" separator={">"} fontSize="sm" color="gray.400">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Início</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};
