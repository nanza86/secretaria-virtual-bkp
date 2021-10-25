import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  RiToolsFill,
  RiUser3Line,
  RiMedicineBottleLine,
  RiSeedlingLine,
  RiBook2Line,
  RiCalculatorLine
} from "react-icons/ri";
import IconBox from "../../components/utils/iconBox";

export const MainMenu = () => {
  return (
    <Accordion allowToggle w="full">
      {/** Manutenções */}
      <AccordionItem border="none" pb="1">
        <AccordionButton
          p="2"
          borderRadius="xl"
          bgColor="white"
          shadow="base"
          fontWeight="semibold"
          _expanded={{ bg: "teal.300", color: "white" }}
        >
          <Flex alignItems="center">
            <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
              <RiToolsFill size="20" />
            </IconBox>
            <Text my="auto" fontSize="sm">
              Manutenções
            </Text>
            <AccordionIcon />
          </Flex>
        </AccordionButton>
        <AccordionPanel pb="0" pr="0">
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Mutirões
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Obras
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Patrimônio
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Espaços
          </Button>
        </AccordionPanel>
      </AccordionItem>

      {/** Pessoas */}
      <AccordionItem border="none" pb="1">
        <AccordionButton
          p="2"
          borderRadius="xl"
          bgColor="white"
          fontWeight="semibold"
          shadow="base"
          _expanded={{ bg: "teal.300", color: "white" }}
        >
          <Flex alignItems="center">
            <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
              <RiUser3Line size="20" />
            </IconBox>
            <Text my="auto" fontSize="sm">
              Pessoas
            </Text>
            <AccordionIcon />
          </Flex>
        </AccordionButton>
        <AccordionPanel pb="0" pr="0">
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Fardados
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Visitantes
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Prestadores de Serviço
          </Button>
        </AccordionPanel>
      </AccordionItem>

      {/** Daime */}
      <AccordionItem border="none" pb="2">
        <AccordionButton
          p="2"
          borderRadius="xl"
          bgColor="white"
          fontWeight="semibold"
          shadow="base"
          _expanded={{ bg: "teal.300", color: "white" }}
        >
          <Flex alignItems="center">
            <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
              <RiMedicineBottleLine size="20" />
            </IconBox>
            <Text my="auto" fontSize="sm">
              Daime
            </Text>
            <AccordionIcon />
          </Flex>
        </AccordionButton>
        <AccordionPanel pb="0" pr="0">
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Feitio
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Estoque
          </Button>
        </AccordionPanel>
      </AccordionItem>

      {/** Plantas */}
      <AccordionItem border="none" pb="2">
        <AccordionButton
          p="2"
          borderRadius="xl"
          bgColor="white"
          fontWeight="semibold"
          shadow="base"
          _expanded={{ bg: "teal.300", color: "white" }}
        >
          <Flex alignItems="center">
            <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
              <RiSeedlingLine size="20" />
            </IconBox>
            <Text my="auto" fontSize="sm">
              Plantas
            </Text>
            <AccordionIcon />
          </Flex>
        </AccordionButton>
        <AccordionPanel pb="0" pr="0">
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Orquidário
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Agrofloresta
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Rainha e Jagube
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Jardim ornamental
          </Button>
        </AccordionPanel>
      </AccordionItem>

      {/** Trabalhos */}
      <AccordionItem border="none" pb="2">
        <AccordionButton
          p="2"
          borderRadius="xl"
          bgColor="white"
          fontWeight="semibold"
          shadow="base"
          _expanded={{ bg: "teal.300", color: "white" }}
        >
          <Flex alignItems="center">
            <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
              <RiBook2Line size="20" />
            </IconBox>
            <Text my="auto" fontSize="sm">
              Trabalhos
            </Text>
            <AccordionIcon />
          </Flex>
        </AccordionButton>
        <AccordionPanel pb="0" pr="0">
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Calendário
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Escalas
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Hinários
          </Button>
        </AccordionPanel>
      </AccordionItem>

      {/** Financeiro */}
      <AccordionItem border="none" pb="2">
        <AccordionButton
          p="2"
          borderRadius="xl"
          bgColor="white"
          fontWeight="semibold"
          shadow="base"
          _expanded={{ bg: "teal.300", color: "white" }}
        >
          <Flex alignItems="center">
            <IconBox bg="teal.300" color="white" h="30px" w="30px" me="8px">
              <RiCalculatorLine size="20" />
            </IconBox>
            <Text my="auto" fontSize="sm">
              Financeiro
            </Text>
            <AccordionIcon />
          </Flex>
        </AccordionButton>
        <AccordionPanel pb="0" pr="0">
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Fluxo de caixa
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Entradas / Saídas
          </Button>
          <Button
            w="full"
            size="sm"
            my="1"
            bgColor="white"
            justifyContent="flex-start"
          >
            Mensalidades
          </Button>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
