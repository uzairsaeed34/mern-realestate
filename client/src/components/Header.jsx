import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-lg sm:text-2xl font-extrabold tracking-wide">
            <span className="text-blue-500">Rao</span>
            <span className="text-gray-800">Estate</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form className="bg-gray-100 px-4 py-2 rounded-full flex items-center w-40 sm:w-72 transition-all duration-300 focus-within:shadow-md">
          <input
            type="text"
            placeholder="Search properties..."
            className="bg-transparent outline-none w-full placeholder-gray-500 text-gray-700"
          />
          <button type="submit">
            <FaSearch className="text-gray-500 hover:text-gray-700 transition duration-200" />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hidden sm:block hover:text-blue-500 transition duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:block hover:text-blue-500 transition duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <Link
              to="/sign-in"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
 