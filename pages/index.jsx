import React from "react";
import HeroSlider from "../components/Home/HeroSlider";
import Header from "../components/Header";
import About from "../components/Home/About";

const Home = (props) => {
  return (
      <React.Fragment>
          <Header/>

          <HeroSlider/>

          <About/>
      </React.Fragment>
  )
}

export default Home;