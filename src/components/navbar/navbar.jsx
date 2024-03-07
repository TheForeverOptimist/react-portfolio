import React from 'react'
import Nav from './navbar.css'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {useState} from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      ".navigation",
      { y: -100, opacity: 0 }, // Starting from off-screen (adjust as needed)
      { y: 0, opacity: 1, duration: 2, ease: "elastic.out(1, 0.3)", delay: 1.5 }
    );
  
  })
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='navigation'>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <HomeOutlinedIcon />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <PersonOutlineOutlinedIcon />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <WorkOutlineOutlinedIcon />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BookmarkAddedOutlinedIcon />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <EmailOutlinedIcon />
      </a>
    </nav>
  );
}

export default Navbar