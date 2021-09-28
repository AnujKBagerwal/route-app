import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h3>Basic Routes</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* Url Route  */}
      <h3>Dynamic Routes</h3>
      <ul>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/yahoo">Yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">Modus Create</Link>
        </li>
      </ul>
      {/* Nested Route  */}
      <h3>Nested Routes</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      {/* Query Params  */}
      <h3>Query Route</h3>
      <ul>
        <li>
          <Link to="/account?name=netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/account?name=zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/account?name=yahoo">Yahoo</Link>
        </li>
        <li>
          <Link to="/account?name=modus-create">Modus Create</Link>
        </li>
      </ul>
      
    </div>
  );
};

export default Header;
