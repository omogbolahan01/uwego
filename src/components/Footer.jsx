import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <footer>
      <div className="footer-top">
        <div>
          <img src="/images/Frame 115.png" />
        </div>
        <div className="topsss">
          <div className="company">
            <div>
              <h2>Company</h2>
            </div>

            <div className="company-text">
              <NavLink
                to="."
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Home
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
            </div>
          </div>
          <div className="community">
            <div>
              <h2>Community</h2>
              <div />
              <div className="community-text">
                <NavLink
                  to="about"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  About Us
                </NavLink>
                <p>info@uwego.com</p>
                <p>123 Adelaide Ave St. W 13, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/images/Line .png" />
      <div className="footer-bottom">
        <div className="fff">
          <h2>Terms of Conditions</h2>
          <h2>Privacy Policy</h2>
        </div>
        <div className="zzz">
          <p>Copyright © 2022 Uwego. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
  //   return <footer>&#169; 2022 #VANLIFE</footer>;
}
