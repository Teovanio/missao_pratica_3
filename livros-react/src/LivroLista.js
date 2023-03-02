import { ControleEditora } from "./controle/ControleEditora";
import { ControleLivro } from "./controle/ControleLivros";
import React, { useState, useEffect } from 'react';


function LivroLista() {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const [carregado, setCarregado] = useState(false);

  const [livros, setLivros] = useState([]);

  useEffect(() => {
     setLivros(controleLivro.obterLivros());

     setCarregado(true); 
  }, [carregado]);

  const excluir = (codLivro) => {
 
    console.log("codLivro: ", codLivro)
     controleLivro.excluir(codLivro);
    setCarregado(false)
  }

  return <main>
    <h1>
      Catálogo de Livros
    </h1>
    <table className="table">
      <thead className="thead-dark">
          <th>titulo</th>
          <th>resumo</th>
          <th>editora</th>
          <th>autores</th>
      </thead>
      <tbody>
      {carregado ? 
      livros.map((l) => 
      <LinhaLivro livro={l} excluir={excluir} ></LinhaLivro>
      )
        : <tr>
      <th scope="row"></th>
      <td>Ainda estamos carregando</td>
      <td> </td>
      <td></td>
    </tr> }   
    
      
  </tbody>
    </table>
  </main>
}

function LinhaLivro(props) {
  console.log(props)
  const controleEditora = new ControleEditora();

  const nomeEditora =  controleEditora.getNomeEditora(props.livro.codEditora);

  return <tr>
    <td>
      {props.livro.titulo}
      <br/>
      <button onClick={() => {
        console.log(props)
        props.excluir(props.livro.codigo)
        }} >Excluir</button>
    </td>
    <td>{props.livro.resumo}</td>
    <td>{nomeEditora}</td>
    {/* <td>{props.livro.autores}</td> */}
  </tr>
}
export default LivroLista