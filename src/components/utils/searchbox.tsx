import {
  HStack,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import IconBox from "./iconBox";

export const Searchbox = () => {
  return (
    <HStack alignItems="center" w="full">
      <InputGroup>
        <InputRightElement>
          <Button
            p="0"
            _hover={{ bgColor: "teal.300", color: "white" }}
            bgColor="transparent"
            color="gray"
            borderRightRadius="xl"
            borderLeftRadius={0}
          >
            <RiSearchLine size="20" />
          </Button>
        </InputRightElement>{" "}
        <Input
          type="text"
          placeholder="Pesquisar"
          bgColor="white"
          borderRadius="xl"
        />
      </InputGroup>
    </HStack>
  );
};
