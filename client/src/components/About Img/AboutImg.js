// import React, { useEffect, useRef } from "react";
// import sub from "../../Assets/images/Hero2.png";
// import "./AboutImg.css";

// const AboutImg = () => {
//   const aboutImgRef = useRef(null);
//   const aboutContRef = useRef(null);

//   const handleScroll = () => {
//     const aboutImgElement = aboutImgRef.current;
//     const aboutContElement = aboutContRef.current;

//     const imgPosition = aboutImgElement.getBoundingClientRect().top;
//     const contPosition = aboutContElement.getBoundingClientRect().top;
//     const screenHeight = window.innerHeight;

//     if (imgPosition < screenHeight) {
//       aboutImgElement.classList.add("fade-in-left");
//     }

//     if (contPosition < screenHeight) {
//       aboutContElement.classList.add("fade-in-right");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Call handleScroll once to initialize the animations

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="page-container">
//       <div className="Plan-title ">
//         <h3>Product knowledge</h3>
//       </div>
//       <div className="content">
//         <div className="about-img" ref={aboutImgRef}>
//           <img src={sub} alt="Sub" width={460} />
//         </div>
//         <div className="about-cont" ref={aboutContRef}>
//           <h1> Product Information</h1>
//           <p>
//             Since our founding in 2019, SiteWorx InfoTech has been a trusted
//             web hosting company in Jaipur. We are on a mission to make going
//             digital easier by delivering businesses the tools and help they
//             need to build an online presence. SiteWorx InfoTech brings
//             numerous benefits for all its users. Aside from SiteWorx InfoTech
//             dedicated server hosting India and cloud server hosting for small
//             businesses tailored to help businesses succeed, you also benefit
//             from 24×7 customer
//           </p>
//         </div>
//       </div>
     
//     </div>
//   );
// };

// export default AboutImg;



import React from "react";
import sub from "../../Assets/images/Hero2.png";
import "./AboutImg.css";
import {motion} from 'framer-motion';
import {fadeIn} from '../ScrollAnimationTrigger'

const AboutImg = () => {
  return (
    <>
      <div className="page-container">
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial = "hidden"
        whileInView ={"show"}
        viewport ={{once: false, amount: 0.7}}
        className="Plan-title ">
          <h3>Product knowledge</h3>
        </motion.div>
        <div className="content">
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial = "hidden"
          whileInView ={"show"}
          viewport ={{once: false, amount: 0.3}}
          className="about-img" 
          
          >
            <img src={sub} width={460} />
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.2)}
          initial = "hidden"
          whileInView ={"show"}
          viewport ={{once: false, amount: 0.3}}
          className="about-cont">
            <h1> Product Infomatiom</h1>
            <p>
              Since our founding in 2019, SiteWorx InfoTech has been a trusted
              web hosting company in Jaipur. We are on a mission to make going
              digital easier by delivering businesses the tools and help they
              need to build an online presence. SiteWorx InfoTech brings
              numerous benefits for all its users. Aside from SiteWorx InfoTech
              dedicated server hosting India and cloud server hosting for small
              businesses tailored to help businesses succeed, you also benefit
              from 24×7 customer
            </p>
          </motion.div>
        </div>
        <div className="content">
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial = "hidden"
          whileInView ={"show"}
          viewport ={{once: false, amount: 0.3}}
          className="about-cont">
            <h1> Product Infomatiom</h1>
            <p>
              Since our founding in 2019, SiteWorx InfoTech has been a trusted
              web hosting company in Jaipur. We are on a mission to make going
              digital easier by delivering businesses the tools and help they
              need to build an online presence. SiteWorx InfoTech brings
              numerous benefits for all its users. Aside from SiteWorx InfoTech
              dedicated server hosting India and cloud server hosting for small
              businesses tailored to help businesses succeed, you also benefit
              from 24×7 customer
            </p>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.2)}
          initial = "hidden"
          whileInView ={"show"}
          viewport ={{once: false, amount: 0.3}}
          className="about-img">
            <img src={sub} width={460} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutImg;
