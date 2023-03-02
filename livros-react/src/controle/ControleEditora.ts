import { Editora } from "../modelo/Editora";

export class ControleEditora {
  editoras: Editora[] = [
    {
      codEditora: 32454,
      nome: "Leya",
    },
    {
      codEditora: 45678,
      nome: "Arqueiro",
    },
    {
      codEditora: 98764,
      nome: "DarkSide",
    },
  ];

  getEditoras = (): Editora[] => {
    return this.editoras;
  };
  getNomeEditora = (codEditora: number) => {
    const retorno =  this.getEditoras().filter((obj) => {
      return (obj.codEditora == codEditora);
    });
 

    if(retorno.length > 0) {
      return retorno[0].nome
    } else {
      return 'Não encontrado';
    }
  };
}