import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/Webapp_preview.png";
import IMG3 from "../../assets/jam_preview_pic.png";
import IMG1 from "../../assets/orangedoc_preview.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "DocVersation is a Generative AI Application where you can talk to your PDF.",
    info: "OpenAI, Langchain, Upstash Vector, TRPC, Prisma, KindeOSS, SQL, TypeScript, NextJS, React, ShadCN, Tailwind",
    github: "https://github.com/TheForeverOptimist/DocVersation",
    demo: "https://doc-versation.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Elevate- Social Fitness meets Computer Vision Tracking.",
    info: "Javascript, TypeScript, NextJS, React, Tailwind, NodeJS, REST API Integrations",
    github: "https://github.com/Elevate-Inc/elevate-web-app",
    demo: "https://elevate.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Jam- The Chat App Where Vibes are Delicious",
    info: "React, NodeJS, Socket.io, Material UI, MongoDB, Mongoose/Express ",
    github: "https://github.com/guantanamobosch/Jam",
    demo: "https://jam-chat.herokuapp.com/",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, info, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <div className="portfolio_item-description">
                <h3>
                  <strong>{title}</strong>
                </h3>
                <p>{info}</p>
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
                    Live Web App
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
