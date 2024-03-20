import React from "react";
import "./about.css";
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
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
              fontWeight: "500",
              color: "black"
            }}
          >
            I'm a self-driven, business savvy full stack developer. I've been a
            Founder, as well as a Product & Regulatory Manager across various
            industries, i.e. Consumer Social Platforms, Digital Health & Medical
            Devices. My experience in different modalities gives me a
            customer-centric perspective for how I design and implement my engineering.
            My current focus is developing Generative AI applications in TypeScript environments that utilize Large Language Models and Machine Learning to solve real world problems with bold User Experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
