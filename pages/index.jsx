import React from "react";
import HeroSlider from "../components/Home/HeroSlider";
import Header from "../components/Header";
import About from "../components/Home/About";
import Values from "../components/Home/Values";
import HowItWorks from "../components/Home/HowItWorks";

const Home = (props) => {
  return (
      <React.Fragment>
          <Header/>

          <HeroSlider/>

          <About/>

          <Values/>

          <HowItWorks/>
      </React.Fragment>
  )
}

export default Home;