import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const headersocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/seanmunjal/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a
        href="https://github.com/TheForeverOptimist"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </a>
    </div>
  );
}

export default headersocials