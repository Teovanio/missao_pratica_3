import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <ul className="navbar navbar-dark bg-dark">
      <li className="nav-item">
        <Link href="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link href="/dados">Catalogo</Link>
      </li>
      <li className="navbar-item">
        <Link href="/novo">Novo</Link>
      </li>
    </ul>
  );
};
