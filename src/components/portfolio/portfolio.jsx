import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/Jam-logo.png'
import IMG2 from '../../assets/tripcity.png'
import IMG3 from '../../assets/generate-logo.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Jam- The Chat App Where Vibes Are Delicious",
    github: "https://github.com/guantanamobosch/Jam",
    demo: "https://jam-chat.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Trip City- The Social Itinerary For All The Besties",
    github: "https://github.com/JONPIRES/Trip-City",
    demo: "https://trip-city.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Generate - The Social Platform for Photographers",
    github: "https://github.com/JuanitoDeLaTorre/Generate_Social_Media",
    demo: "https://generate-social.onrender.com/",
  },
];


const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
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
          })
        }
      </div>
    </section>
  );
};

export default portfolio;
