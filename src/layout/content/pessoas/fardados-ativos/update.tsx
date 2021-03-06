import {
  HStack,
  Heading,
  Flex,
  Box,
  Button,
  Divider,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import { ArrowBackIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Formik, Form, FormikFormProps, FormikValues } from "formik";
import { Breadcrumbs } from "../../../../components/utils/breadcrumb";
import { AvatarAccount } from "../../../../components/utils/avatar";
import { Searchbox } from "../../../../components/utils/searchbox";
import { MobileMenu } from "../../../../components/utils/mobileMenu";
import { Motion, ItemMotion } from "../../../../components/utils/motion";
import FormField from "../../../../components/utils/formInput";
import * as yup from "yup";
import { useState } from "react";

interface MutiraoProps {
  body: any;
}

export const MutiraoUpdateForm = (props: MutiraoProps) => {
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = props.body;
  const router = useRouter();
  const toast = useToast();

  const validateSchema = yup.object().shape({
    nome: yup.string().required("campo obrigatorio!"),
    objetivos: yup.string().required("campo obrigatorio!"),
    descricao: yup.string().required("campo obrigatorio!"),
    responsavel: yup.string().required("campo obrigatorio!"),
    data_mutirao: yup.date().required("Campo obrigatório"),
    requisitos: yup.string().required("campo obrigatorio!"),
    local: yup.string().required("campo obrigatorio!"),
    participantes: yup.string().required("campo obrigatorio!"),
  });

  const onSubmit = async (formValues: FormikValues) => {
    console.log(formValues);
    setLoading(true);
    const urlApi = "/api/zeladoria/mutirao/" + formValues.id + "/update";
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
      ToastFeedback("Mutirão atualizado com sucesso!", "success");
    }
    return await postData.json();
  };

  const deleteMutirao = async (idMutirao: any) => {
    setDeleting(true);
    const urlApi = "/api/zeladoria/mutirao/" + idMutirao + "/delete";

    const postData = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!postData.ok) {
      throw new Error(postData.statusText);
    } else {
      setLoading(false);
      ToastFeedback("Mutirão excluido com sucesso!", "error");
      router.back();
    }
  };
  const ToastFeedback = (
    title: string,
    statuses: "success" | "error" | "warning" | "info"
  ) => {
    toast({
      title: title,
      position: "bottom-right",
      status: statuses,
      isClosable: true,
    });
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
              initialValues={{ ...data }}
              validationSchema={validateSchema}
              onSubmit={(values: any) => {
                onSubmit(values);
              }}
            >
              {({ errors, touched, values, handleChange }) => (
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
                        Salvar
                      </Button>
                      <Button
                        leftIcon={<DeleteIcon h="4" />}
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
                    pe="5"
                  >
                    <FormField
                      name="concluido"
                      label="Concluído"
                      type="switch"
                      onChange={handleChange}
                      isChecked={values.concluido}
                    />
                    <FormField
                      name="nome"
                      label="Nome do Mutirão"
                      isRequired
                      disabled={values.concluido ? true : false}
                    />
                    <Flex w="100%" wrap={["wrap", "wrap", "nowrap"]}>
                      <Flex me={["0", "5"]} w={["100%", "100%", "50%"]}>
                        <FormField
                          name="descricao"
                          label="Descrição"
                          type="textarea"
                          defaultValue={values.descricao}
                          onChange={handleChange}
                          isRequired
                          disabled={values.concluido ? true : false}
                        />
                      </Flex>
                      <Flex w={["100%", "100%", "50%"]}>
                        <FormField
                          name="objetivos"
                          label="Objetivos"
                          type="textarea"
                          defaultValue={values.objetivos}
                          onChange={handleChange}
                          isRequired
                          disabled={values.concluido ? true : false}
                        />
                      </Flex>
                    </Flex>
                    <Flex w="100%">
                      <Flex me="5" w="60%">
                        <FormField
                          name="responsavel"
                          label="Responsável"
                          defaultValue={values.responsavel}
                          onChange={handleChange}
                          isRequired
                          disabled={values.concluido ? true : false}
                        />
                      </Flex>
                      <Flex w="40%">
                        <FormField
                          name="data_mutirao"
                          label="Data"
                          type="datepicker"
                          defaultValue={values.data_mutirao}
                          onChange={handleChange}
                          isRequired
                          disabled={values.concluido ? true : false}
                        />
                      </Flex>
                    </Flex>
                    <FormField
                      name="requisitos"
                      label="Requisitos"
                      type="textarea"
                      defaultValue={values.requisitos}
                      onChange={handleChange}
                      isRequired
                      disabled={values.concluido ? true : false}
                    />
                    <FormField
                      name="local"
                      label="Local"
                      isRequired
                      disabled={values.concluido ? true : false}
                    />
                    <FormField
                      name="participantes"
                      label="Participantes Confirmados"
                      type="textarea"
                      defaultValue={values.participantes}
                      onChange={handleChange}
                      isRequired
                      disabled={values.concluido ? true : false}
                    />
                  </HStack>
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
                          colorScheme="red"
                          isLoading={deleting}
                          loadingText="Excluindo"
                          onClick={() => {
                            deleteMutirao(values.id);
                          }}
                        >
                          Quero Excluir
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Form>
              )}
            </Formik>
          </Box>
        </HStack>
      </Motion>
    </>
  );
};
