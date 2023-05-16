import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/new_visual_ui.png'
import IMG2 from '../../assets/new_visual_ui.png'
import IMG3 from '../../assets/new_visual_ui.png'
import IMG4 from '../../assets/new_visual_ui.png'
import IMG5 from '../../assets/new_visual_ui.png'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://elevate.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://elevate.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://elevate.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
