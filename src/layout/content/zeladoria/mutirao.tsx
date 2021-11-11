import {
  HStack,
  Heading,
  Flex,
  Box,
  Button,
  Divider,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Tag,
  Avatar,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowBackIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { Breadcrumbs } from "../../../components/utils/breadcrumb";
import { AvatarAccount } from "../../../components/utils/avatar";
import { Searchbox } from "../../../components/utils/searchbox";
import { MobileMenu } from "../../../components/utils/mobileMenu";
import { Motion, ItemMotion } from "../../../components/utils/motion";
import { useState } from "react";

interface MutiraoProps {
  body: any;
}

export const Mutirao = (props: MutiraoProps) => {
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = props.body;
  const router = useRouter();
  const formik = useFormik({
    initialValues: { ...data },
    onSubmit: async (formValues) => {
      setLoading(true);
      const urlApi = "/api/" + formValues.id + "/update";
      const deleteId = formValues;
      delete deleteId["id"];

      const postData = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteId),
      });
      if (!postData.ok) {
        throw new Error(postData.statusText);
      } else {
        setLoading(false);
      }
      return await postData.json();
    },
  });
  const deleteMutirao = async (idMutirao: any) => {
    setDeleting(true);
    const urlApi = "/api/" + idMutirao + "/delete";
    console.log(urlApi);

    const postData = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idMutirao),
    });
    if (!postData.ok) {
      throw new Error(postData.statusText);
    } else {
      setLoading(false);
      router.back();
    }
  };

  return (
    <>
      <HStack
        bgImage="/bg-zeladoria.jpg"
        bgSize="cover"
        bgPosition="center"
        w="full"
        alignItems="flex-start"
        mb="5"
        borderBottomRadius={["2xl", "none"]}
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
            <MobileMenu />
            <Searchbox />
          </Flex>
          <HStack justifyContent="space-between">
            <Flex flexDir="column">
              <Breadcrumbs path={["Início", "Zeladoria"]} />
              <Heading
                fontWeight={["bold", "thin"]}
                fontSize={["1.8em", "2.5em", "3em"]}
                color="gray.600"
              >
                Mutirão
              </Heading>
            </Flex>
            <Flex>
              <AvatarAccount />
            </Flex>
          </HStack>
        </Flex>
      </HStack>

      {/** Secretaria */}

      <Motion initial={ItemMotion.hidden} animate={ItemMotion.visible}>
        <HStack px={["5", "0"]} pr={["5", "5"]} pb={5} w="full">
          <Box p={5} shadow="base" w="100%" borderRadius="md" bgColor="white">
            <form onSubmit={formik.handleSubmit}>
              <HStack justifyContent="space-between">
                <Flex>
                  <Button
                    onClick={() => router.back()}
                    colorScheme="gray"
                    variant="outline"
                  >
                    <ArrowBackIcon />
                  </Button>
                </Flex>
                <Flex>
                  <Button
                    rightIcon={<CheckIcon />}
                    colorScheme="green"
                    variant="outline"
                    me="2"
                    type="submit"
                    isLoading={loading}
                    loadingText="Salvando"
                  >
                    Salvar
                  </Button>
                  <Button
                    rightIcon={<DeleteIcon h="4" />}
                    colorScheme="red"
                    variant="outline"
                    onClick={onOpen}
                  >
                    Excluir
                  </Button>
                </Flex>
              </HStack>
              <Divider my="4" />
              <HStack
                justifyContent="flex-start"
                alignItems="flex-start"
                flexDirection="column"
                w="full"
              >
                <FormControl id="nome" pb="5">
                  <FormLabel fontWeight="semibold">Nome do mutirão:</FormLabel>
                  <Input
                    name="nome"
                    defaultValue={formik.values.nome}
                    onChange={formik.handleChange}
                  />
                </FormControl>
                <FormControl id="objetivos" pb="5">
                  <FormLabel fontWeight="semibold">Objetivos:</FormLabel>
                  <Textarea
                    defaultValue={formik.values.objetivos}
                    onChange={formik.handleChange}
                  ></Textarea>
                </FormControl>
                <Flex w="100%">
                  <Flex me="5" w="60%">
                    <FormControl id="responsavel" pb="5">
                      <FormLabel fontWeight="semibold">Responsável:</FormLabel>
                      <Input
                        defaultValue={formik.values.responsavel}
                        onChange={formik.handleChange}
                      />
                    </FormControl>
                  </Flex>
                  <Flex w="40%">
                    <FormControl id="data" pb="5">
                      <FormLabel fontWeight="semibold">Data: </FormLabel>
                      <Input
                        defaultValue={formik.values.data_mutirao}
                        onChange={formik.handleChange}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
                <FormControl id="requisitos" pb="5">
                  <FormLabel fontWeight="semibold">Requisitos:</FormLabel>
                  <Textarea
                    defaultValue={formik.values.requisitos}
                    onChange={formik.handleChange}
                  ></Textarea>
                </FormControl>
                <FormControl id="local" pb="5">
                  <FormLabel fontWeight="semibold">Local:</FormLabel>
                  <Input
                    defaultValue={formik.values.local}
                    onChange={formik.handleChange}
                  />
                </FormControl>
                <FormControl id="nome" pb="5">
                  <FormLabel fontWeight="semibold">
                    Participantes confirmados:
                  </FormLabel>
                  <Tag size="lg" m="1" colorScheme="blue" borderRadius="full">
                    <Avatar
                      src="https://bit.ly/sage-adebayo"
                      size="sm"
                      name="Segun Adebayo"
                      my="2"
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>Segun Adebayo</TagLabel>
                  </Tag>
                  <Tag size="lg" m="1" colorScheme="blue" borderRadius="full">
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                      size="sm"
                      my="2"
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>Ryan Florence</TagLabel>
                  </Tag>
                  <Tag size="lg" m="1" colorScheme="blue" borderRadius="full">
                    <Avatar
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                      size="sm"
                      my="2"
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>Prosper Otemuyiwa</TagLabel>
                  </Tag>
                  <Tag size="lg" m="1" colorScheme="blue" borderRadius="full">
                    <Avatar
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                      size="sm"
                      my="2"
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>Kent Dodds</TagLabel>
                  </Tag>
                </FormControl>
              </HStack>
            </form>
          </Box>
        </HStack>
      </Motion>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Excluir Mutirão</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Você tem certeza que deseja excluir esse mutirão?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              variant="ghost"
              isLoading={deleting}
              loadingText="Excluindo"
              onClick={() => {
                deleteMutirao(formik.values.id);
              }}
            >
              Quero Excluir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
