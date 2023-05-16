import React from "react";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Sean Munjal
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_copyright">
        <small>&copy; Sean Munjal. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
