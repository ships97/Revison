import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/postpage">PostPage</Link>
      <Link to="/showdata">ShowData</Link>
      <Link to="/item">item</Link>
    </div>
  );
};
