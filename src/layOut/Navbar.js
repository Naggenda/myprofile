import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaContao } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";



const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button onClick={() => navigate("/")} className="btn nav">
      <FaHome />
      </button>
      
        <button onClick={() => navigate("/about")} className="btn nav">
            <FaUserGraduate />
          </button>
          <button onClick={() => navigate("/projects")} className="btn nav">
            <FaAddressBook />
          </button>
          <button onClick={() => navigate("/contact")} className="btn nav">
            <FaContao />
          </button>
      
    </div>
  );
};

export default Navbar;
