

import React from "react";
import "./top.css";
const Top = () => {
  return (
    <div className="top__contaainer">
      <div className="nav__container">
        <nav>
          <input id="nav-toggle" type="checkbox" />
          <div className="logo">
            <a href="">
              <strong>bre.as/jane</strong>
            </a>
          </div>
          <ul className="links">
            <li>Offerings</li>
            <li>Other Links</li>
            <li>Testimonals</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
            <button className="btn1">Book Trial</button>
          </ul>
          <label for="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </nav>
      </div>
      <h2 className="h2">
        Start your day with the <br></br>goodness of Yoga
      </h2>
    </div>
  );
};

export default Top;

