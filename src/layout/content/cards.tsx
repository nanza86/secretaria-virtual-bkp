import {
  Avatar,
  Flex,
  Heading,
  Button,
  Text,
  Icon,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { FaStarOfDavid, FaEye } from "react-icons/fa";
import {
  RiCake2Line,
  RiBookOpenLine,
  RiArrowRightCircleFill,
} from "react-icons/ri";
import IconBox from "../../components/utils/iconBox";

/** Card Trabalhos */
interface trabalhosProps {
  dados: any[];
}

export const CardTrabalhos = (props: trabalhosProps) => {
  const trabalhos = [...props.dados];
  const lista = trabalhos.map((item, key) => (
    <Tr key={key}>
      <Td>{item.data}</Td>
      <Td w="lg">{item.trabalho}</Td>
      <Td>
        <Button
          h="auto"
          minW="auto"
          variant="unstyled"
          color="gray.500"
          _hover={{ color: "teal.300" }}
        >
          <FaEye size="17" />
        </Button>
      </Td>
    </Tr>
  ));

  return (
    <Box
      p={5}
      shadow="base"
      w="100%"
      minH="220px"
      borderRadius="md"
      bgColor="white"
    >
      <Flex alignItems="center">
        <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
          <FaStarOfDavid size="18" />
        </IconBox>
        <Heading fontSize="md" color="gray.400" whiteSpace="nowrap">
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

/** Card Aniversariantes */
interface aniversariantesProps {
  dados: any[];
}

export const CardAniversariantes = (props: aniversariantesProps) => {
  const aniversariantes = [...props.dados];
  const lista = aniversariantes.map((item, key) => (
    <Tr key={key}>
      <td>
        <Avatar size="sm" name={item.nome} src={item.img} />
      </td>
      <Td>{item.data}</Td>
      <Td w="lg">{item.nome}</Td>
    </Tr>
  ));

  return (
    <Box
      p={5}
      shadow="base"
      w="100%"
      minH="220px"
      borderRadius="md"
      bgColor="white"
    >
      <Flex alignItems="center">
        <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
          <RiCake2Line size="18" />
        </IconBox>
        <Heading fontSize="md" color="gray.400" whiteSpace="nowrap">
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

/** Card Presenças */
interface presencaProps {
  dados: any[];
}
export const CardPresenca = (props: presencaProps) => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
        tools: {
          download: false,
        },
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    },
  });
  const [series, setSeries] = useState([...props.dados]);

  const ram = () => {
    return (
      Math.floor(Math.random() * (Math.floor(50) - Math.ceil(0) + 1)) +
      Math.ceil(0)
    );
  };

  const handleUpdate = () => {
    const dados = [
      {
        name: "Fardados",
        data: [ram(), ram(), ram(), ram(), ram(), ram()],
      },
      {
        name: "Visitantes",
        data: [ram(), ram(), ram(), ram(), ram(), ram()],
      },
    ];
    setSeries(dados);
  };
  return (
    <Box
      p={5}
      pb={0}
      shadow="base"
      w="100%"
      minH="220px"
      borderRadius="md"
      bgColor="white"
    >
      <Flex alignItems="center">
        <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
          <RiBookOpenLine onClick={handleUpdate} size="18" />
        </IconBox>
        <Heading fontSize="md" color="gray.400" whiteSpace="nowrap">
          Livro de Presenças
        </Heading>
      </Flex>
      <Chart options={options} series={series} type="line" height="145px" />
    </Box>
  );
};

{
  /** Card Orquidário */
}
export const CardOrquidario = () => {
  return (
    <Box
      pos="relative"
      shadow="base"
      w="100%"
      minH="220px"
      borderRadius="md"
      bgImage="../../orquidario.jpg"
      bgSize="140%"
    >
      <Flex
        pos="absolute"
        left="0"
        bottom="0"
        right="0"
        top="0"
        p="7"
        alignItems="flex-start"
        justifyContent="center"
        bgGradient="linear(to-r, black 10%, rgba(255,255,255,0) 100%)"
        borderRadius="xl"
        flexDir="column"
      >
        <Heading fontSize="xl" color="white">
          Orquidário
        </Heading>
        <Heading fontSize="2xl" color="yellow.400">
          Marcos Moysés
        </Heading>
        <Divider
          my="3"
        />
        <Text color="white" fontWeight="semibold">
          Belezas e Primores
        </Text>
        <Button p="0px" variant="no-hover" bg="transparent">
          <Text
            fontSize="md"
            fontWeight="bold"
            _hover={{ me: "4px" }}
            transition="all .5s ease"
            color="yellow.400"
          >
            Acessar
          </Text>
          <Icon
            as={RiArrowRightCircleFill}
            w="30px"
            h="30px"
            fontSize="xl"
            transition="all .5s ease"
            mx=".3rem"
            cursor="pointer"
            color="white"
            _hover={{ transform: "translateX(20%)" }}
          />
        </Button>
      </Flex>
    </Box>
  );
};
