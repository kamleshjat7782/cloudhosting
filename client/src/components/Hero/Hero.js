import React, { useState} from "react";
import "./Hero.css";
import sub from "../../Assets/img/hero-img-3.png";
import { Button } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  return (
    <>
      <div className="hero-container">
        <div>
          <div className="content-h3">
            <h1>Welcome to My Website</h1>
          </div>
          <div className="content-h5">
            <h5>
            <TypeAnimation
        sequence={[
          "Buy Cloud Hosting",
          1500,
          "Buy VPS Hosting",
          1500,
          "Buy Reseller Hosting ",
          1500,
        ]}
        speed={200}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
            </h5>
          </div>
          <div className="button-div">
            <Button size="large" variant="contained" sx={{ borderRadius: 5, background: "#115256", mt: 3 }}>
              Call us
            </Button>
          </div>
        </div>
        <div className="main-hero-img">
          <img src={sub} className="hero-img" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Hero;
