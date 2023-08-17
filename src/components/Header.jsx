import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <img src="/images/homelogo.png" className="home-logo" />
      <img src="/images/Line 3.png" className="home-line" />

      <nav>
        <NavLink
          to="."
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About Us
        </NavLink>
        <NavLink
          to="how"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          How to uwego
        </NavLink>
        <NavLink
          to="contact"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="faqs"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          FAQs
        </NavLink>
      </nav>
    </header>
  );
}
