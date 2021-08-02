import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import { FaPen, FaTrash, FaPenAlt } from "react-icons/fa";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import Alface from "../../assets/Alface.svg";

export const Cards = () => {
  const [categoriaId, setCategoriaId] = useState("");
  const [nome, setNome] = useState("");

  const [categorias, setCategorias] = useState([]);

  return (
    <Flex flexDirection="column" marginY="24px">
      <Flex alignItems="center">
        <Text
          fontSize="36px"
          lineHeight="54px"
          colorScheme="blackAlpha"
          fontWeight="bold"
          flexDirection="row"
          marginRight="20px"
        >
          Verduras
        </Text>
        <FaPen cursor="pointer" onClick={() => {}} />
      </Flex>

      <Flex justifyContent="space-between">
        <Flex
          // key={props.key}
          bg="#FBFAFA"
          borderRadius="20px"
          flexWrap="wrap"
          mb="3"
          mt={[0, 0, 3, 3]}
          boxShadow="rgb(0, 0, 0, 0.3) 10px 10px 30px 1px"
          width="340px"
          marginX="15px"
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            paddingY="10px"
            paddingX="10px"
            width="340px"
            height="auto"
            maxHeight="380px"
          >
            <Box
              width="320px"
              height="160px"
              bg="rgba(17, 17, 17, 0.75)"
              className="cards"
              padding="0"
            >
              <Flex marginX="8px" marginY="30px" alignItems="center">
                <Image
                  src={Alface}
                  alt="Teste"
                  display="flex"
                  borderRadius="100px"
                  border="2px solid #FBFAFA"
                />
                <Text
                  fontSize="36px"
                  lineHeight="54px"
                  color="#FBFAFA"
                  fontWeight="bold"
                  paddingX="23px"
                  // flexDirection="row"
                  // marginRight="20px"
                >
                  Alface
                </Text>
              </Flex>
            </Box>

            <Flex flexWrap="wrap" justifyContent="initial" marginY="16px">
              <Text
                fontSize="16px"
                fontWeight="bold"
                lineHeight="24px"
                color="#111111"
                paddingX="16px"
              >
                Alface Crespa
              </Text>
            </Flex>

            <Flex flexWrap="wrap" justifyContent="initial" marginBottom="26px">
              <Text
                fontSize="14px"
                fontWeight="400"
                align="justify"
                lineHeight="21px"
                color="#111111"
                width="100%"
                paddingX="16px"
              >
                A alface crespa é uma hortaliça folhosa muito popular entre os
                brasileiros. Costuma ser consumida crua, geralmente em saladas
              </Text>
            </Flex>

            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
              paddingX="16px"
            >
              <Flex>
                <Button
                  leftIcon={
                    <Icon
                      as={FaTrash}
                      boxSize={8}
                      bg="#DB4444"
                      color="#FBFAFA"
                      borderRadius="8px"
                      w={7}
                      h={7}
                      padding="2"
                    />
                  }
                  variant="ghost"
                  padding="0"
                  // onClick={props.openDeleteModal}
                ></Button>
                <Button
                  leftIcon={
                    <Icon
                      as={FaPen}
                      boxSize={8}
                      bg="#757270"
                      color="#FBFAFA"
                      borderRadius="8px"
                      w={7}
                      h={7}
                      padding="2"
                    />
                  }
                  variant="ghost"
                  padding="0"
                  // onClick={props.openEditModal}
                ></Button>
              </Flex>

              <Flex
                flexWrap="wrap"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Text
                  fontSize="12px"
                  fontWeight="bold"
                  lineHeight="24px"
                  color="#111111"
                  // paddingX="16px"
                >
                  Média{" "}
                  <span style={{ fontWeight: "lighter", fontSize: 12 }}>
                    R$
                  </span>{" "}
                  <span style={{ fontSize: 24, color: "#006B5C" }}>13,99</span>{" "}
                  <span style={{ fontWeight: "lighter" }}>Kg</span>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          // key={props.key}
          marginX="15px"
          bg="#FBFAFA"
          borderRadius="20px"
          flexWrap="wrap"
          mb="3"
          mt={[0, 0, 3, 3]}
          boxShadow="rgb(0, 0, 0, 0.3) 10px 10px 30px 1px"
          width="340px"
        >
          <Flex
            // width={["340px", "340px", "340%", "30%"]}
            flexDirection="column"
            justifyContent="space-between"
            paddingY="10px"
            paddingX="10px"
            width="340px"
            height="auto"
            maxHeight="380px"
          >
            <Box
              width="320px"
              height="160px"
              bg="rgba(17, 17, 17, 0.75)"
              className="cards"
              padding="0"
            >
              <Flex marginX="8px" marginY="30px" alignItems="center">
                <Image
                  src={Alface}
                  alt="Teste"
                  display="flex"
                  borderRadius="100px"
                  border="2px solid #FBFAFA"
                />
                <Text
                  fontSize="36px"
                  lineHeight="54px"
                  color="#FBFAFA"
                  fontWeight="bold"
                  paddingX="23px"
                  // flexDirection="row"
                  // marginRight="20px"
                >
                  Alface
                </Text>
              </Flex>
            </Box>

            <Flex flexWrap="wrap" justifyContent="initial" marginY="16px">
              <Text
                fontSize="16px"
                fontWeight="bold"
                lineHeight="24px"
                color="#111111"
                paddingX="16px"
              >
                Alface Crespa
              </Text>
            </Flex>

            <Flex flexWrap="wrap" justifyContent="initial" marginBottom="26px">
              <Text
                fontSize="14px"
                fontWeight="400"
                align="justify"
                lineHeight="21px"
                color="#111111"
                width="100%"
                paddingX="16px"
              >
                A alface crespa é uma hortaliça folhosa muito popular entre os
                brasileiros. Costuma ser consumida crua, geralmente em saladas
              </Text>
            </Flex>

            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
              paddingX="16px"
            >
              <Flex>
                <Button
                  leftIcon={
                    <Icon
                      as={FaTrash}
                      boxSize={8}
                      bg="#DB4444"
                      color="#FBFAFA"
                      borderRadius="8px"
                      w={7}
                      h={7}
                      padding="2"
                    />
                  }
                  variant="ghost"
                  padding="0"
                  // onClick={props.openDeleteModal}
                ></Button>
                <Button
                  leftIcon={
                    <Icon
                      as={FaPen}
                      boxSize={8}
                      bg="#757270"
                      color="#FBFAFA"
                      borderRadius="8px"
                      w={7}
                      h={7}
                      padding="2"
                    />
                  }
                  variant="ghost"
                  padding="0"
                  // onClick={props.openEditModal}
                ></Button>
              </Flex>

              <Flex
                flexWrap="wrap"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Text
                  fontSize="12px"
                  fontWeight="bold"
                  lineHeight="24px"
                  color="#111111"
                  // paddingX="16px"
                >
                  Média{" "}
                  <span style={{ fontWeight: "lighter", fontSize: 12 }}>
                    R$
                  </span>{" "}
                  <span style={{ fontSize: 24, color: "#006B5C" }}>13,99</span>{" "}
                  <span style={{ fontWeight: "lighter" }}>Kg</span>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          // key={props.key}
          marginX="15px"
          bg="#FBFAFA"
          borderRadius="20px"
          flexWrap="wrap"
          mb="3"
          mt={[0, 0, 3, 3]}
          boxShadow="rgb(0, 0, 0, 0.3) 10px 10px 30px 1px"
          width="340px"
        >
          <Flex
            // width={["340px", "340px", "340%", "30%"]}
            flexDirection="column"
            justifyContent="space-between"
            paddingY="10px"
            paddingX="10px"
            width="340px"
            height="auto"
            maxHeight="380px"
          >
            <Box
              width="320px"
              height="160px"
              bg="rgba(17, 17, 17, 0.75)"
              className="cards"
              padding="0"
            >
              <Flex marginX="8px" marginY="30px" alignItems="center">
                <Image
                  src={Alface}
                  alt="Teste"
                  display="flex"
                  borderRadius="100px"
                  border="2px solid #FBFAFA"
                />
                <Text
                  fontSize="36px"
                  lineHeight="54px"
                  color="#FBFAFA"
                  fontWeight="bold"
                  paddingX="23px"
                  // flexDirection="row"
                  // marginRight="20px"
                >
                  Alface
                </Text>
              </Flex>
            </Box>

            <Flex flexWrap="wrap" justifyContent="initial" marginY="16px">
              <Text
                fontSize="16px"
                fontWeight="bold"
                lineHeight="24px"
                color="#111111"
                paddingX="16px"
              >
                Alface Crespa
              </Text>
            </Flex>

            <Flex flexWrap="wrap" justifyContent="initial" marginBottom="26px">
              <Text
                fontSize="14px"
                fontWeight="400"
                align="justify"
                lineHeight="21px"
                color="#111111"
                width="100%"
                paddingX="16px"
              >
                A alface crespa é uma hortaliça folhosa muito popular entre os
                brasileiros. Costuma ser consumida crua, geralmente em saladas
              </Text>
            </Flex>

            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
              paddingX="16px"
            >
              <Flex>
                <Button
                  leftIcon={
                    <Icon
                      as={FaTrash}
                      boxSize={8}
                      bg="#DB4444"
                      color="#FBFAFA"
                      borderRadius="8px"
                      w={7}
                      h={7}
                      padding="2"
                    />
                  }
                  variant="ghost"
                  padding="0"
                  // onClick={props.openDeleteModal}
                ></Button>
                <Button
                  leftIcon={
                    <Icon
                      as={FaPen}
                      boxSize={8}
                      bg="#757270"
                      color="#FBFAFA"
                      borderRadius="8px"
                      w={7}
                      h={7}
                      padding="2"
                    />
                  }
                  variant="ghost"
                  padding="0"
                  // onClick={props.openEditModal}
                ></Button>
              </Flex>

              <Flex
                flexWrap="wrap"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Text
                  fontSize="12px"
                  fontWeight="bold"
                  lineHeight="24px"
                  color="#111111"
                  // paddingX="16px"
                >
                  Média{" "}
                  <span style={{ fontWeight: "lighter", fontSize: 12 }}>
                    R$
                  </span>{" "}
                  <span style={{ fontSize: 24, color: "#006B5C" }}>13,99</span>{" "}
                  <span style={{ fontWeight: "lighter" }}>Kg</span>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider marginTop="48px" borderColor="#111111" />
    </Flex>
  );
};
