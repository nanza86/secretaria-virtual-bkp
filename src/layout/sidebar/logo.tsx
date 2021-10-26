import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { RiHomeSmileLine } from "react-icons/ri";
import IconBox from "../../components/utils/iconBox";

export const Logo = () => {
  return (
    <HStack alignItems="flex-end" pb="5" w="full">
      <IconBox color="white" bg="teal.300" p="2">
        <RiHomeSmileLine size="30" />
      </IconBox>
      <VStack alignItems="flex-start">
        <Heading m="0" p="0" fontSize="md" fontWeight="800" color="gray">
          Secretaria Virtual
        </Heading>
        <Text mt="-4px !important" p="0" fontSize="0.9em" color="gray.400">Flor de Jagube</Text>
      </VStack>
    </HStack>
  );
};
