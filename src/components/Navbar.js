import { Link } from "react-router-dom";
import config from "../config/config";

const Navbar = () => {
  return (
    <nav className="bg-navbartheme text-white p-4 fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{config.name}'s Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Portfolio</Link>
          </li>
          <li>
            <Link to="/photography" className="hover:text-gray-300">Photography</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;