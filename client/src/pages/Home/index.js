import React from "react";
import {
  Box,
  Divider,
  Flex,
  Image,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";
import Info from "../../assets/infos.svg";
import { FaFilter } from "react-icons/fa";

export const Home = () => {
  return (
    <Flex
      bg="#E5E5E5"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
      alignItems="center"
    >
      <Flex width="100%">
        <Flex
          bg="#FFF"
          paddingY="2"
          flexDirection="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Image src={Logo} alt="Logo Hortinja" paddingX="5%" height="52px" />
          <Flex>
            <Select
              placeholder="Selecionar categoria"
              borderRadius="50"
              marginX="5"
              bg="#E5E5E5"
              color="#757270"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <InputGroup>
              <Input
                variant="outline"
                placeholder="Buscar hortaliça"
                borderRadius="50"
                bg="#E5E5E5"
                _placeholder={{ color: "#757270" }}
              />
              <InputRightElement
                children={
                  <Icon
                    as={FaFilter}
                    boxSize={8}
                    bg="#006B5C"
                    borderRadius="50%"
                    w={8}
                    h={8}
                    padding="1"
                  />
                }
              />
            </InputGroup>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="row" minHeight="85vh">
        <Box marginY="30">
          <Image src={Info} alt="Infos Hortinja" />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            textAlign="center"
          >
            <Flex
              flexDirection="row"
              bg="red"
              width="100px"
              height="100px"
            ></Flex>
          </Flex>
          <Divider marginY="4" borderColor="#111111" />
        </Box>
      </Flex>

      <Box marginY="4">
        <Text alignItems="center" fontSize="15px" color="gray">
          Copyright © 2021 Feito com por Kazap Tecnologia - Todos os direitos
          reservados
        </Text>
      </Box>
    </Flex>
  );
};
