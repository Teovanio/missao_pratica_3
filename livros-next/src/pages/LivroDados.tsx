import type { NextPage } from "next";
import React, { useState } from "react";
import { ControleEditora } from "../../classes/controle/ControleEditora";
import { Editora } from "../../classes/modelo/Editora";
import { Livro } from "../../classes/modelo/Livros";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Menu } from "../../componentes/Menu";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useRouter } from "next/router";
const LivroDados: NextPage = () => {
  const controleEditora = new ControleEditora();

  const baseURL = "http://localhost:3000/api/livros";

  const opcoes = controleEditora.getEditoras().map((editora: Editora) => {
    return { value: editora.codEditora, text: editora.nome };
  });

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const router = useRouter();

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const livro = new Livro();
    livro.codigo = 0;
    livro.codEditora = codEditora;
    livro.titulo = titulo;
    livro.resumo = resumo;
    livro.autores = autores.split("\n");

    incluirLivro(livro);
    router.push("/LivroLista");
  };

  const incluirLivro = (livro: Livro) => {
    return fetch(baseURL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(livro),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };

  const handleSetAutores = (evento: React.ChangeEvent<any>) => {
    setAutores(evento.target.value);
  };

  const handleSetTitulo = (evento: React.ChangeEvent<any>) => {
    setTitulo(evento.target.value);
  };

  const handleSetResumo = (evento: React.ChangeEvent<any>) => {
    setResumo(evento.target.value);
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
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <Form.Group className="mb-3 ">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              value={titulo}
              onChange={handleSetTitulo}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Resumo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={resumo}
              onChange={handleSetResumo}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Editora</Form.Label>
            <Form.Select onChange={tratarCombo} value={codEditora}>
              {opcoes.map((editora, i) => {
                return (
                  <option value={editora.value} key={i}>
                    {editora.text}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Autores(1 por linha)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={autores}
              onChange={handleSetAutores}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Salvar Dados
          </Button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
