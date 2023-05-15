import React from 'react'
import Navbar from './navbar.css'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const navbar = () => {
  return (
    <nav>
      <a href="#"><HomeOutlinedIcon /></a>
      <a href="#about"><PersonOutlineOutlinedIcon /></a>
      <a href="#experience"><BookmarkAddedOutlinedIcon /></a>
      <a href="#portfolio"><WorkOutlineOutlinedIcon /></a>
      <a href="#contact"><EmailOutlinedIcon /></a>
    </nav>
  )
}

export default navbar