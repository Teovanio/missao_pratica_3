import { ControleEditora } from "../classes/controle/ControleEditora";
import { Livro } from "../classes/modelo/Livros";

export const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir(): void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>
        {props.name}
      </p>
    </div>
  );
};
