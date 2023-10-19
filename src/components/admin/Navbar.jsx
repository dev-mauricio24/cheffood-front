import { useAuth } from "../../hooks/useAuth";
import "./dashboard.css";

const Navbar = () => {
  const { logout } = useAuth()

  return (
    <nav className="shadow-sm mb-5">
      <span>Jaiber Arrieta</span>
      <button onClick={ logout }>Cerrar Sesión</button>
    </nav>
  );
};

export default Navbar;
