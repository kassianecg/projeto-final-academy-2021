import { Button, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const AddButtons = () => {
  return (
    <Flex flexDirection="row" justifyContent="center" marginY="24px">
      <Button
        leftIcon={<AddIcon />}
        bg="#006B5C"
        color="#FBFAFA"
        variant="solid"
        marginX="16px"
        _hover={{ bg: "#006B5C" }}
        borderRadius="50"
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          bg: "#006B5C",
        }}
      >
        Adicionar Hortaliças
      </Button>
      <Button
        leftIcon={<AddIcon />}
        bg="#006B5C"
        color="#FBFAFA"
        variant="solid"
        marginX="16px"
        _hover={{ bg: "#006B5C" }}
        borderRadius="50"
      >
        Adicionar Categoria
      </Button>
    </Flex>
  );
};
