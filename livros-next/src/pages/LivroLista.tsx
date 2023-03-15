import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Livro } from "../../classes/modelo/Livros";
import styles from "../styles/Home.module.css";

const LivroLista: NextPage = () => {
  const baseURL = "http://localhost:3000/api/livros";

  const [carregado, setCarregado] = useState(false);
  const [livros, setLivros] = useState<Array<Livro>>([]);

  useEffect(() => {
    return () => {
      obterLivros().then((livros) => {
        setCarregado(true);
        setLivros(livros);
      });
    };
    [carregado];
  });

  const obterLivros = () => {
    return fetch(baseURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      console.log("get");
      console.log(response);
      return response.json();
    });
  };

  const excluirLivro = (codigo: Number) => {
    return fetch(baseURL + "/" + codigo.toString(), {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      console.log("DELETE");
      console.log(response);
      return response.json();
    });
  };

  return <main>Olá Mundo</main>;
};

export default LivroLista;
