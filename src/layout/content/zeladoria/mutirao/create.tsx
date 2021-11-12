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
} from "@chakra-ui/react";
import { ArrowBackIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { Breadcrumbs } from "../../../../components/utils/breadcrumb";
import { AvatarAccount } from "../../../../components/utils/avatar";
import { Searchbox } from "../../../../components/utils/searchbox";
import { MobileMenu } from "../../../../components/utils/mobileMenu";
import { Motion, ItemMotion } from "../../../../components/utils/motion";
import { useState } from "react";

export const MutiraoCreate = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      nome: "",
      objetivos: "",
      responsavel: "",
      data_mutirao: "",
      requisitos: "",
      local: "",
      participantes: "",
    },
    onSubmit: async (formValues) => {
      console.log(JSON.stringify(formValues))
      setLoading(true);
      const urlApi = "/api/zeladoria/mutirao/create";
      const postData = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (!postData.ok) {
        throw new Error(postData.statusText);
      } else {
        setLoading(false);
      }
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
                    leftIcon={<CheckIcon />}
                    colorScheme="green"
                    variant="outline"
                    me="2"
                    type="submit"
                    isLoading={loading}
                    loadingText="Salvando"
                  >
                    Cadastrar Mutirão
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
                  <Input name="nome" onChange={formik.handleChange} />
                </FormControl>
                <FormControl id="objetivos" pb="5">
                  <FormLabel fontWeight="semibold">Objetivos:</FormLabel>
                  <Textarea onChange={formik.handleChange}></Textarea>
                </FormControl>
                <Flex w="100%">
                  <Flex me="5" w="60%">
                    <FormControl id="responsavel" pb="5">
                      <FormLabel fontWeight="semibold">Responsável:</FormLabel>
                      <Input onChange={formik.handleChange} />
                    </FormControl>
                  </Flex>
                  <Flex w="40%">
                    <FormControl id="data_mutirao" pb="5">
                      <FormLabel fontWeight="semibold">Data: </FormLabel>
                      <Input onChange={formik.handleChange} />
                    </FormControl>
                  </Flex>
                </Flex>
                <FormControl id="requisitos" pb="5">
                  <FormLabel fontWeight="semibold">Requisitos:</FormLabel>
                  <Textarea onChange={formik.handleChange}></Textarea>
                </FormControl>
                <FormControl id="local" pb="5">
                  <FormLabel fontWeight="semibold">Local:</FormLabel>
                  <Input onChange={formik.handleChange} />
                </FormControl>
                <FormControl id="nome" pb="5">
                  <FormLabel fontWeight="semibold">
                    Participantes confirmados:
                  </FormLabel>
                </FormControl>
              </HStack>
            </form>
          </Box>
        </HStack>
      </Motion>
    </>
  );
};
