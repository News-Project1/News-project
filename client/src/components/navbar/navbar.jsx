import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          NewsPortal
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-4">
          <li><Link className="text-white hover:text-gray-300" to="/">Home</Link></li>
          <li><Link className="text-white hover:text-gray-300" to="/about">About</Link></li>
          <li><Link className="text-white hover:text-gray-300" to="/contact">Contact</Link></li>
          <li><Link className="text-white hover:text-gray-300" to="/categories">Categories</Link></li>
          <li><Link className="text-white hover:text-gray-300" to="/articles">Articles</Link></li>
          <li><Link className="text-white hover:text-gray-300" to="/profile">Profile</Link></li>
          <li><Link className="text-white hover:text-gray-300" to="/bookmarks">Bookmarks</Link></li>
          <li><Link className="text-white hover:text-gray-300" to="/create-article">Create</Link></li>
          <li><Link className="text-white hover:text-gray-300" to="/admin">Admin</Link></li>
          <li><Link className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-gray-200" to="/login">Login</Link></li>
          <li><Link className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-400" to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
