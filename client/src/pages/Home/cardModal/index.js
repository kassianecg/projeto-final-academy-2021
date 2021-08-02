import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import api from "../../../services/api";

const CardModal = (props) => {
  const [categoriaId, setCategoriaId] = useState("");
  const [nome, setNome] = useState("");
  const [url, setUrl] = useState("");
  const [tonalidade, setTonalidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [beneficios, setBeneficios] = useState("");
  const [precoMedio, setPrecoMedio] = useState("");
  const [medida, setMedida] = useState("");
  const [descricao, setdescricao] = useState("");

  // shade,
  //     image,
  //     description,
  //     category_id,
  //     average_price,
  //     measurement,

  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const cleanFields = () => {
    setNome("");
    setCategoriaId("");
    setTonalidade("");
    setUrl("");
    setCategoria("");
    setBeneficios("");
    setPrecoMedio("");
    setMedida("");
    setdescricao("");
  };

  const closeModal = () => {
    setLoading(false);
    cleanFields();
    props.onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (props.cardId) {
      api
        .patch(`/horticulturals/${props.cardId}`, {
          nome,
          url,
          categoriaId,
          tonalidade,
          categoria,
          beneficios,
          precoMedio,
          medida,
          descricao,
        })
        .then(() => {
          props.loadPosts();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => closeModal());
    } else {
      api
        .post("/horticulturals", {
          nome,
          url,
          categoriaId,
          tonalidade,
          categoria,
          beneficios,
          precoMedio,
          medida,
          descricao,
        })
        .then(() => {
          props.loadPosts();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => closeModal());
    }
  };

  useEffect(() => {
    if (!props.cardId) {
      cleanFields();
    }
  }, [props.cardId]);

  // useEffect(() => {
  //   if (props.cardId) {
  //     setLoadingData(true);

  //     const loadPost = async () => {
  //       const responsePost = await api.get(`/horticulturals/${props.cardId}`);

  //       setAuthorId(responsePost?.data?.authorId);
  //       setTitle(responsePost?.data?.title);
  //       setDescription(responsePost?.data?.description);
  //       setUrl(responsePost?.data?.url);
  //     };

  //     loadPost().finally(() => {
  //       setLoadingData(false);
  //     });
  //   }
  // }, [props.cardId]);

  useEffect(() => {
    const loadAuthors = async () => {
      const response = await api.get("/categories");
      setCategorias(response.data);
    };

    loadAuthors();
  }, []);
};

export default CardModal;
