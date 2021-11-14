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
import { Formik, Form, FormikFormProps } from "formik";
import { Breadcrumbs } from "../../../../components/utils/breadcrumb";
import { AvatarAccount } from "../../../../components/utils/avatar";
import { Searchbox } from "../../../../components/utils/searchbox";
import { MobileMenu } from "../../../../components/utils/mobileMenu";
import { Motion, ItemMotion } from "../../../../components/utils/motion";
import FormField from "../../../../components/utils/formInput";
import * as yup from "yup";
import { useState } from "react";

export const MutiraoCreate = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateSchema = yup.object().shape({
    nome: yup.string().required("campo obrigatorio!"),
    objetivos: yup.string().required("campo obrigatorio!"),
    responsavel: yup.string().required("campo obrigatorio!"),
    data_mutirao: yup.string().min(10,"Data Incorreta").required("Campo obrigatório"),
    requisitos: yup.string().required("campo obrigatorio!"),
    local: yup.string().required("campo obrigatorio!"),
    participantes: yup.string().required("campo obrigatorio!"),
  });

  const initialValues = {
    nome: "",
    objetivos: "",
    responsavel: "",
    timestamp: "" + Date.now() + "",
    data_mutirao: "",
    requisitos: "",
    local: "",
    participantes: "",
  };

  const onSubmit = async (formValues: FormikFormProps) => {
    //console.log(formValues);
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
            <Formik
              initialValues={initialValues}
              validationSchema={validateSchema}
              onSubmit={(values: any) => {
                onSubmit(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
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
                    <FormField name="nome" label="Nome do Mutirão" isRequired />
                    <FormField
                      name="objetivos"
                      label="Objetivos"
                      type="textarea"
                      isRequired
                    />
                    <Flex w="100%">
                      <Flex me="5" w="60%">
                        <FormField
                          name="responsavel"
                          label="Responsável"
                          isRequired
                        />
                      </Flex>
                      <Flex w="40%">
                        <FormField
                          name="data_mutirao"
                          label="Data de execução"
                          type="date"
                          isRequired
                        />
                      </Flex>
                    </Flex>
                    <FormField
                      name="requisitos"
                      label="Requisitos"
                      type="textarea"
                      isRequired
                    />
                    <FormField
                      name="local"
                      label="Local"
                      isRequired
                    />
                    <FormField
                      name="participantes"
                      label="Participantes Confirmados"
                      type="textarea"
                      isRequired
                    />
                  </HStack>
                </Form>
              )}
            </Formik>
          </Box>
        </HStack>
      </Motion>
    </>
  );
};
