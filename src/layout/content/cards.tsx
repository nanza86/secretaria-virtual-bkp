import {
  Avatar,
  Flex,
  Heading,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Divider,
} from "@chakra-ui/react";
import { FaStarOfDavid } from "react-icons/fa";
import { RiCake2Line } from "react-icons/ri";
import IconBox from "../../components/utils/iconBox";

interface trabalhosProps {
  dados: any[];
}

export const CardTrabalhos = (props: trabalhosProps) => {
  const trabalhos = [...props.dados];
  const lista = trabalhos.map((item, key) => (
    <Tr key={key}>
      <Td>{item.data}</Td>
      <Td w="lg">{item.trabalho}</Td>
    </Tr>
  ));

  return (
    <Box p={5} shadow="base" w="100%" minH="220px" borderRadius="md" bgColor="white">
      <Flex alignItems="center">
        <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
          <FaStarOfDavid size="18" />
        </IconBox>
        <Heading fontSize="md" color="gray.400">
          Próximos Trabalhos
        </Heading>
      </Flex>
      <Divider mt="3" />
      <Table variant="simple" size="sm">
        <Tbody>{lista}</Tbody>
      </Table>
    </Box>
  );
};

interface aniversariantesProps {
  dados: any[];
}

export const CardAniversariantes = (props: aniversariantesProps) => {
  const aniversariantes = [...props.dados];
  const lista = aniversariantes.map((item, key) => (
    <Tr key={key}>
        <td><Avatar size="sm" name={item.nome} src={item.img} /></td>
      <Td>{item.data}</Td>
      <Td w="lg">{item.nome}</Td>
    </Tr>
  ));

  return (
    <Box p={5} shadow="base" w="100%" minH="220px" borderRadius="md" bgColor="white">
      <Flex alignItems="center">
        <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
          <RiCake2Line size="18" />
        </IconBox>
        <Heading fontSize="md" color="gray.400">
          Aniversariantes do Mês
        </Heading>
      </Flex>
      <Divider mt="3" />
      <Table variant="simple" size="sm">
        <Tbody>{lista}</Tbody>
      </Table>
    </Box>
  );
};
