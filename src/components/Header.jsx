// src/components/Header.jsx

import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light">React Concepts With Rakshitha</a>
        <form className="d-flex input-group w-auto">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span
            className="input-group-text border-0 text-light"
            id="search-addon">
            <i className="fas fa-search" style={{ color: "black" }}></i>
          </span>
        </form>
      </div>
    </nav>
  );
};

export default Header;
