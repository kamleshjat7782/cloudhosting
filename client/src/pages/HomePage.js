import React from "react";
import { Link} from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import "../styles/Homepage.css";
import Hero from "../components/Hero/Hero";
import Faq from "../components/Faq/Faq";
import Choose from "../components/Choose/Choose";
import Custom from "./Custom/Custom";
import Plan from "../components/Plan/Plan";
import AboutImg from "../components/About Img/AboutImg";
import whoWeAre from "../Assets/img/whoWeAre.gif";

import {motion} from 'framer-motion';
import {fadeIn} from '../components/ScrollAnimationTrigger'

const HomePage = () => {

  return (
    <Layout title={"ALl Products - Best offers "}>
      
      <Hero />
      
      <Plan />
     
      {/* -----------------about-us-container--------------- */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial = "hidden"
        whileInView ={"show"}
        viewport ={{once: false, amount: 0.5}}
      className={`abus-container container`}>
        <div className="home-about-us row align-items-center my-3">
          <div className="col-md-10 second">
            <img src={`${whoWeAre}`} alt="who we are image" />
          </div>
          <div className="col-md-2 first">
            <div className=''>
              <h2 className='k-home-about-us-title'>Who we are</h2>
              <p className="k-home-about-us-heading fs-2 lh-base">We build greater futures through innovation and collective knowledge.</p>
              <p className='k-home-about-us-content fs-4 lh-base'>Kainskep is a global technology and analytics services company. We help our clients achieve speed-to-market, overcome digital barriers, and create business value with our specialized service offerings and consultative business approach.  </p>
              <div className='k-home-about-us-button'>
                <Link to={'/about'} style={{ textDecoration: "none" }}>
                  <span className='k-home-about-us-button-name'>About us</span>
                  <span className='k-home-about-us-button-icon'>{" >"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>
      <AboutImg/>
      <Custom />
      <Choose />
      <Faq />
    </Layout>
  );
};

export default HomePage;
