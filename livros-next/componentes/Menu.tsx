import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/dados">Catalogo</Link>
      </li>
      <li className="nav-item">
        <Link href="/novo">Novo</Link>
      </li>
    </ul>
  );
};
