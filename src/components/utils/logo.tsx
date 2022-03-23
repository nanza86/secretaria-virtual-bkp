import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { RiHomeSmileLine } from "react-icons/ri";
<<<<<<< HEAD
import IconBox from "./iconBox";

export const Logo = () => {
  return (
    <HStack alignItems="flex-end" pb="5" w="full">
=======
import { useRouter } from "next/router";
import IconBox from "./iconBox";

export const Logo = () => {
  const router = useRouter();
  const handleLogo = () => {
    router.push("/");
  }
  return (
    <HStack alignItems="flex-end" pb="5" w="full" cursor="pointer" onClick={handleLogo}>
>>>>>>> main
      <IconBox color="white" bg="teal.300" p="2">
        <RiHomeSmileLine size="30" />
      </IconBox>
      <VStack alignItems="flex-start">
<<<<<<< HEAD
        <Heading m="0" p="0" fontSize="md" fontWeight="800" color="gray" flexWrap="nowrap" whiteSpace="nowrap">
          Secretaria Virtual
        </Heading>
        <Text mt="-4px !important" p="0" fontSize="0.9em" color="gray.400">Flor de Jagube</Text>
=======
        <Heading
          m="0"
          p="0"
          fontSize="md"
          fontWeight="800"
          color="gray.600"
          flexWrap="nowrap"
          whiteSpace="nowrap"
        >
          Secretaria Virtual
        </Heading>
        <Text mt="-4px !important" p="0" fontSize="0.9em" color="gray.500">
          Flor de Jagube
        </Text>
>>>>>>> main
      </VStack>
    </HStack>
  );
};
