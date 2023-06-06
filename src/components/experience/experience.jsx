import React from "react";
import "./experience.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Socket.io</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Materialize</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>GitFlow</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>Bcrypt</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>PostgresSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>OAuth</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>TensorFlow</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_details-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
