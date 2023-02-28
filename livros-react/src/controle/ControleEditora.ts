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
    return this.getEditoras().filter((obj) => {
      return (obj.codEditora = codEditora);
    });
  };
}
