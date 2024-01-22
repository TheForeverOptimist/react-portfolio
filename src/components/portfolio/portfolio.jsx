import React from "react";
import "./portfolio.css";
import IMG2 from '../../assets/jam_nobg.png'
import IMG3 from '../../assets/tripcity_transparent.png'
import IMG1 from '../../assets/elevate_transparent.png'

const data = [
    {
    id: 1,
    image: IMG1,
    title: "Elevate- Social Fitness meets Computer Vision Tracking.",
    github: "https://github.com/TheForeverOptimist",
    demo: "https://elevate.app"
  },
  {
    id: 2,
    image: IMG2,
    title: "Jam- The Chat App Where Vibes Are Delicious",
    github: "https://github.com/guantanamobosch/Jam",
    demo: "https://jam-chat.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Trip City- The Social Itinerary For All The Besties",
    github: "https://github.com/JONPIRES/Trip-City",
    demo: "https://trip-city.herokuapp.com/",
  }, 
];


const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item elevate">
          <div className="portfolio_item-image">
            <img
              src={IMG1}
              alt="Elevate- Social Fitness meets Computer Vision Tracking."
            />
          </div>
          <h3>Social Fitness meets Computer Vision Tracking.</h3>
          <h3>
            This NextJS React Web App mirrors the startup's iOS app{" "}
            <a
              href="https://elevate.app/iOS.html"
              style={{ textDecoration: "underline", color: "blue" }}
            >
              'Elevate Fitness Network'
            </a>{" "}
            utilizing the following: Javascript, TypeScript, NextJS's Dynamic
            Routing/SSR/SSG, Backend API integration, Materialize UI
          </h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/TheForeverOptimist"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Private GitHub
            </a>
            <a
              href="https://elevate.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live App
            </a>
          </div>
        </article>
        {data.slice(1).map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
