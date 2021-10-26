import {
  Flex,
  Button,
  Heading,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { Logo } from "./logo";
import React from "react";
import { MainMenu } from "../../layout/sidebar/accordion-menu";
import { Searchbox } from "../../layout/sidebar/searchbox";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null)
  return (
    <>
      <Flex>
        <Logo />
        <Button ref={btnRef} onClick={onOpen}>
          <RiMenuLine />
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading as="h3" fontSize="md" mt="5" mb="5">
              Navegue por aqui:
            </Heading>
            <Searchbox />
          </DrawerHeader>

          <DrawerBody>
            <MainMenu />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
