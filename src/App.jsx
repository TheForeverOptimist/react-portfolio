import React from "react";
import Header from "./components/header/header";
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'



const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
