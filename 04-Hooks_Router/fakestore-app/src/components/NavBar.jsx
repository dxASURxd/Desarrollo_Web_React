import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-20 w-full bg-[#572364] p-4 flex justify-between text-white items-center">
      <Link to="/">
        <span>FakeStore</span>
      </Link>
      <Link to="/carrito">
        <span>Carrito</span>
      </Link>
    </nav>
  );
};

export default NavBar;
