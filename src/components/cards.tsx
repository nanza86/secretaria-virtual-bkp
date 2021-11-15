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
  Tag,
  TagLabel,
  TagLeftIcon,
  AvatarGroup,
  background,
} from "@chakra-ui/react";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CalendarIcon, CheckCircleIcon } from "@chakra-ui/icons";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { FaStarOfDavid, FaEye } from "react-icons/fa";
import {
  RiCake2Line,
  RiBookOpenLine,
  RiArrowRightCircleFill,
  RiUserStarLine,
} from "react-icons/ri";
import IconBox from "./utils/iconBox";
import { useRouter } from "next/router";

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
interface apexProps {
  chart: {
    id: string;
    toolbar: {
      show: boolean;
    };
  };
  stroke: {
    curve: any;
  };
  xaxis: {
    categories: string[];
  };
}

export const CardPresenca = (props: presencaProps) => {
  const opttionsType: apexProps = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
  };
  const [options, setOptions] = useState(opttionsType);
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
        data: [
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
        ],
      },
      {
        name: "Visitantes",
        data: [
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
          ram(),
        ],
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
          <RiBookOpenLine cursor="pointer" onClick={handleUpdate} size="18" />
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
        <Divider my="3" />
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

/** Card Mutirão */
interface mutiraoProps {
  nome: string;
  descricao: string;
  data: string;
  responsavel: string;
  concluido: boolean;
  antigo: boolean;
}
type Truncate = {
  longTextWrapper: HTMLElement;
  longText: string;
  lines: number;
  truncFrom: "start" | "middle" | "end";
  ellipsis: string;
  wrapperOffset: number;
};

export const CardMutirao = (props: mutiraoProps) => {
  return (
    <Box
      p={5}
      shadow="base"
      _hover={{
        boxShadow: "md",
      }}
      w="100%"
      borderRadius="md"
      bgGradient="linear(to-t, gray.50 10%, rgba(255,255,255,0) 100%)"
    >
      <Flex alignItems="center">
        <Heading fontSize="md">
          {props.concluido && <CheckCircleIcon me="2" color="teal.300" />}
          {props.nome}
        </Heading>
        <Flex></Flex>
      </Flex>
      <Divider my="3" />
      <Heading as="h5" fontSize="xs" mb="1" color="gray.400">
        Objetivos
      </Heading>
      <Text fontSize="sm">
        {props.descricao}
      </Text>
      <Divider my="3" />
      <Heading as="h5" fontSize="xs" color="gray.400">
        Data do Mutirão / Responsável
      </Heading>
      <Tag
        size="md"
        bgColor="white"
        color={props.antigo ? "teal.400" : "gray"}
        variant="solid"
        me="2"
        mt="3"
      >
        <TagLeftIcon as={CalendarIcon} />
        <TagLabel fontSize="sm">{props.data}</TagLabel>
      </Tag>
      <Tag size="md" bgColor="white" color="gray" variant="solid" mt="3">
        <TagLeftIcon as={RiUserStarLine} />
        <TagLabel fontSize="sm">{props.responsavel}</TagLabel>
      </Tag>
      <Divider my="3" />
      <Heading as="h5" fontSize="xs" color="gray.400" mb="3">
        Participantes Confirmados
      </Heading>
      <AvatarGroup size="md" max={5}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
    </Box>
  );
};
