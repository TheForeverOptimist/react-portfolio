import React from "react";
import "./portfolio.css";
import IMG2 from '../../assets/jam_nobg.png'
import IMG3 from '../../assets/tripcity_transparent.png'
import IMG1 from '../../assets/elevate_transparent_E.png'

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
        {data.map(({ id, image, title, github, demo }) => {
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
                  Live App
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
