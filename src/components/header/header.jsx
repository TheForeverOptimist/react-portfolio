import React from "react";
import "./header.css";
import CTA from "./cta";
import ME from "../../assets/metransparent.png";
import HeaderSocial from "./headersocials";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CssDoodle from "../cssdoodle";






  const Header = () => {
    useGSAP(() => {
      const tl = gsap.timeline();
      tl.from(".line1", { y: 100, opacity: 0, duration: 1 })
        .from(".line2", { y: 100, opacity: 0, duration: 1, rotationY: '360'}, '<')
        .from(".text-light", { y: 100, opacity: 0, duraiton: 0.5}, '<')
        .from(".cta", { y: 100, opacity: 0, duration: 1, ease: "bounce", rotationX: '360'})
        // .from(".me", { x: 100, opacity: 0, duration: 0.3, ease: "linear"}, '<')
        .fromTo(".me", {y:110, opacity: 0}, {y:-95, duration: 1, opacity:1, ease: "elastic"}, "<")
    });

    return (
      <header>
        <CssDoodle />
        <div className="container header_container">
          <h5 className="line1">Hello I'm</h5>
          <h1 className="line2">Sean Munjal</h1>
          <h5 className="text-light">Full Stack Developer</h5>
          <CTA />
          <HeaderSocial />

          <div className="me">
            <img src={ME} alt="" />
          </div>
          <a href="#portfolio" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    );
  };

  export default Header;
