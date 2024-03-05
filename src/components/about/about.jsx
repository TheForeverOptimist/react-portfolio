import React from "react";
import './about.css'
import ME from "../../assets/me_transparent_new.png";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="personal pic" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <AssignmentTurnedInIcon className="about_icon" />
              <h5>Experience</h5>
              <small>Full Stack Developer</small>
              <small>(2+ Years)</small>
              <small>Product Management</small>
              <small>(8+ Years)</small>
            </article>
            <article className="about_card">
              <WorkspacesIcon className="about_icon" />
              <h5>Industries</h5>
              <small>Consumer Social</small>
              <small>Digital Health</small>
              <small>Medical Devices</small>
            </article>
            <article className="about_card">
              <BusinessCenterIcon className="about_icon" />
              <h5>Current Interests</h5>
              <small>Advanced JavaScript</small>
              <small>Generative AI</small>
              <small>Machine Learning</small>
              <small>LLMs</small>
            </article>
          </div>
          <p style={{ display: "flex", alignItems: "center" }}>
            <strong>Hi I'm Sean </strong>. 👋{" "}
          </p>
          <p>
            I'm a self-driven, business savvy full stack developer. I've been a
            Founder, as well as a Product & Regulatory Manager across various
            industries, i.e. Consumer Social Platforms, Digital Health
            Technologies & Medical Devices. My previous experience in
            different modalities gives me a unique perspective for how I design
            and implement my engineering. I'm a high energy, high integrity
            person with battle tested communication and team-building skills as
            an experienced product leader well versed in integrating with
            operations, development, marketing and C-suite stakeholders.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
