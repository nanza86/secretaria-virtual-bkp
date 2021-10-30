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
} from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { Breadcrumbs } from "../../../components/utils/breadcrumb";
import { AvatarAccount } from "../../../components/utils/avatar";
import { Searchbox } from "../../../components/utils/searchbox";
import { MobileMenu } from "../../../components/utils/mobileMenu";
import { Motion, ItemMotion } from "../../../components/utils/motion";

interface MutiraoProps {
  id: any;
}
export const Mutirao = (props: MutiraoProps) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(values);
    },
  });
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
                  rightIcon={<EditIcon />}
                  colorScheme="gray"
                  variant="outline"
                  me="2"
                >
                  Editar
                </Button>
                <Button
                  rightIcon={<DeleteIcon h="4" />}
                  colorScheme="red"
                  variant="outline"
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
              <form onSubmit={formik.handleSubmit}>
                <FormControl id="nome" mb="5">
                  <FormLabel fontWeight="semibold">Nome do mutirão:</FormLabel>
                  <Input value={props.id} />
                </FormControl>
                <FormControl id="objetivos" mb="5">
                  <FormLabel fontWeight="semibold">Objetivos:</FormLabel>
                  <Textarea></Textarea>
                </FormControl>
                <Flex w="100%">
                  <Flex me="5" w="60%">
                    <FormControl id="responsavel" mb="5">
                      <FormLabel fontWeight="semibold">Responsável:</FormLabel>
                      <Input />
                    </FormControl>
                  </Flex>
                  <Flex w="40%">
                    <FormControl id="data" mb="5">
                      <FormLabel fontWeight="semibold">Data: </FormLabel>
                      <Input />
                    </FormControl>
                  </Flex>
                </Flex>
                <FormControl id="requisitos" mb="5">
                  <FormLabel fontWeight="semibold">Requisitos:</FormLabel>
                  <Textarea></Textarea>
                </FormControl>
                <FormControl id="local" mb="5">
                  <FormLabel fontWeight="semibold">Local:</FormLabel>
                  <Input value={props.id} />
                </FormControl>
                <FormControl id="nome" mb="5">
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
              </form>
            </HStack>
          </Box>
        </HStack>
      </Motion>
    </>
  );
};
