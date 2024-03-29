import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Livro } from "../../classes/modelo/Livros";
import { LinhaLivro } from "../../componentes/LinhaLivro";
import { Menu } from "../../componentes/Menu";
import styles from "../styles/Home.module.css";

const LivroLista: NextPage = () => {
  const baseURL = "http://localhost:3000/api/livros";

  const [carregado, setCarregado] = useState(false);
  const [livros, setLivros] = useState<Array<Livro>>([]);

  useEffect(() => {
    obter().then((data) => {
      setLivros(data);
    });
  }, [carregado]);

  const obter = () => {
    return fetch(baseURL, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCarregado(true);
        return data;
      });
  };

  const excluir = (codigo: Number) => {
    excluirLivro(codigo).then(() => {
      setCarregado(false);
    });
  };

  const excluirLivro = (codigo: Number) => {
    return fetch(baseURL + "/" + codigo.toString(), {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      return response.json();
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu></Menu>
      <main>
        <h1>Catálogo de Livro</h1>
        <table>
          {livros &&
            livros.map((livro) => {
              return (
                <LinhaLivro
                  key={livro.codigo}
                  excluir={() => {
                    excluir(livro.codigo);
                  }}
                  livro={livro}
                ></LinhaLivro>
              );
            })}
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
