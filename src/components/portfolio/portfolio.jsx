import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/Webapp_preview.png";
import IMG3 from "../../assets/ellieai-preview.png";
import IMG1 from "../../assets/hate-reading-preview.png";
import IMG4 from "../../assets/stethy_ai_preview.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const data = [
  {
    id: 1,
    image: IMG4,
    title:
      "Stethy AI generates a pre-visit medical note after a conversation with a patient.",
    info: "Next.js, React, OpenAI, JavaScript, Node.js",
    github: "https://github.com/TheForeverOptimist/stethy-ai",
    demo: "https://www.stethyai.com",
  },
  {
    id: 2,
    image: IMG1,
    title:
      "HATE-READING.COM is a Generative AI Application where you can talk to your PDFs.",
    info: "TypeScript, SQL, OpenAI, Langchain, Upstash Vector, TRPC, Prisma, KindeOSS, NextJS, React, ShadCN, Tailwind",
    github: "https://github.com/TheForeverOptimist/DocVersation",
    demo: "https://hate-reading.com",
  },

  {
    id: 3,
    image: IMG2,
    title: "Elevate- Social Fitness meets Computer Vision Tracking.",
    info: "TypeScript, NextJS, React, Tailwind, NodeJS, REST API Integrations",
    github: "https://github.com/Elevate-Inc/elevate-web-app",
    demo: "https://elevate.app",
  },

  {
    id: 4,
    image: IMG3,
    title: "Ellie.Fit - The Pure Audio AI Assistant",
    info: "TypeScript, NextJS, React, Tailwind, OpenAI, Azure, Whisper Speech Recognition",
    github: "https://github.com/Elevate-Inc/elevate-web-app",
    demo: "https://ellie.fit",
  },
];

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".portfolio_item").forEach((item) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top center+=150",
            end: "bottom center",
            // onEnter, onLeave, onEnterBack, onLeaveBack
            toggleActions: "play reverse play reverse",
            scrub: 1
          },
        }
      );
    });

    // Cleanup function to kill ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, info, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img
                  src={image}
                  alt={title}
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open(demo, "_blank")}
                />
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

export default Portfolio;
