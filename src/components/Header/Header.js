import React from "react";
import "./Header.css";
import gymbuddy from "../../images/gymbuddy.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={gymbuddy} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
