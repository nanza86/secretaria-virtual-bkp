import {
  Flex,
  Heading,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const AvatarAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex alignItems="center">
      <Avatar
        size="xl"
        name="Christian Nwamba"
        src="https://bit.ly/code-beast"
        border="3px solid white"
        boxShadow="lg"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex alignItems="center">
              <Flex>
                <Avatar
                  size="lg"
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                  bg="white"
                  border="3px solid white"
                  boxShadow="md"
                />
              </Flex>
              <Flex>
                <Heading as="h3" size="sm" pl="2">
                  Olá, Christian Nwamba
                </Heading>
              </Flex>
            </Flex>
          </DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
