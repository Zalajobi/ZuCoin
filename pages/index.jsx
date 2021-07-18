import React from "react";
import HeroSlider from "../components/Home/HeroSlider";
import Header from "../components/Header";
import About from "../components/Home/About";
import Values from "../components/Home/Values";
import HowItWorks from "../components/Home/HowItWorks";
import WhyUs from "../components/Home/WhyUs";
import Roadmap from "../components/Home/Roadmap";
import Tokenomics from "../components/Home/Tokenomics";

const Home = (props) => {
  return (
      <React.Fragment>
          <Header/>

          <HeroSlider/>

          <About/>

          <Values/>

          <HowItWorks/>

          <Tokenomics/>

          <WhyUs/>

          <Roadmap/>
      </React.Fragment>
  )
}

export default Home;