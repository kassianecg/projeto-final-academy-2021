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
import { FaFilter, FaClipboardList } from "react-icons/fa";
import { AddButtons } from "./addButtons";
import { Cards } from "./cards";

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

      <Flex flexDirection="row" marginY="32px">
        <Box>
          <Image src={Info} alt="Infos Hortinja" />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            // textAlign="center"
            marginTop="calc(66px - 160px)"
          >
            <Flex
              flexDirection="column"
              bg="rgba(255, 255, 255, 0.9)"
              width="360px"
              height="160px"
              marginLeft="32px"
              borderRadius="32px"
              padding="16px"
            >
              <Flex
                flexWrap="wrap"
                justifyContent="initial"
                flexDirection="column"
              >
                <Text
                  fontSize="18px"
                  fontWeight="bold"
                  lineHeight="24px"
                  color="#111111"
                  paddingX="16px"
                >
                  Registros
                </Text>
              </Flex>

              <Flex
                flexWrap="wrap"
                justifyContent="initial"
                flexDirection="column"
              >
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  align="justify"
                  lineHeight="21px"
                  color="#111111"
                  width="100%"
                  paddingX="16px"
                >
                  Número de registros da Horta
                </Text>
              </Flex>
              <Flex
                justifyContent="center"
                flexDirection="row"
                marginTop="45px"
                alignItems="center"
              >
                <Icon
                  as={FaClipboardList}
                  boxSize={8}
                  color="#006B5C"
                  w={8}
                  h={8}
                  // padding="2 "
                />
                <Text
                  fontSize="24px"
                  fontWeight="bold"
                  align="justify"
                  fontFamily="Poppins"
                  lineHeight="36px"
                  color="#111111"
                  paddingX="16px"
                >
                  #029
                </Text>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              bg="rgba(255, 255, 255, 0.9)"
              width="360px"
              height="160px"
              marginRight="32px"
              borderRadius="32px"
              paddingY="16px"
            >
              <Flex
                flexWrap="wrap"
                justifyContent="initial"
                flexDirection="column"
              >
                <Text
                  fontSize="18px"
                  fontWeight="bold"
                  lineHeight="24px"
                  color="#111111"
                  paddingX="32px"
                >
                  Valor Total
                </Text>
              </Flex>

              <Flex
                flexWrap="wrap"
                justifyContent="initial"
                flexDirection="column"
              >
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  align="justify"
                  lineHeight="21px"
                  color="#111111"
                  width="100%"
                  paddingX="32px"
                >
                  Preço total da Horta
                </Text>
              </Flex>
              <Flex
                justifyContent="center"
                flexDirection="row"
                marginTop="45px"
                alignItems="center"
              >
                <Icon
                  as={FaClipboardList}
                  boxSize={8}
                  color="#006B5C"
                  w={8}
                  h={8}
                  // padding="2 "
                />
                <Text
                  fontSize="24px"
                  fontWeight="bold"
                  align="justify"
                  fontFamily="Poppins"
                  lineHeight="36px"
                  color="#111111"
                  paddingX="16px"
                >
                  R$ 2.099,00
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Divider marginTop="48px" borderColor="#111111" />
          <AddButtons />
          <Cards />
        </Box>
      </Flex>
      {/* <Box justifyContent="space-between"></Box> */}

      <Box marginY="4">
        <Text alignItems="center" fontSize="15px" color="gray">
          Copyright © 2021 Feito com por Kazap Tecnologia - Todos os direitos
          reservados
        </Text>
      </Box>
    </Flex>
  );
};
