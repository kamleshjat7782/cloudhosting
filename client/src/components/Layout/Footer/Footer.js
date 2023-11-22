import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../Assets/Images/logo.png'
// import Logo from "../../Assets/Images/logo.png";
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
// import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div  className='footer'>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-sm-6 col-md-2">
              
              <div className="heading">Services</div>
              <ul className="footer-menu">
                <li className="menu-item"><a href="acronis">Acronis</a></li>
                <li className="menu-item"><a href="bitninja">Bitninja</a></li>
                <li className="menu-item"><a href="dedicated-cloud-server">Dedicated Servers</a></li>
              </ul>
              
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="heading">Cloud VPS</div>
              <ul className="footer-menu">
                <li className="menu-item"><a href="general-cloud-vps-hosting">General Cloud VPS</a></li>
                <li className="menu-item"><a href="best-webhost-vps-cloud-server-hosting-price">WebHost Cloud VPS</a></li>
                <li className="menu-item"><a href="managed-affordable-vps-hosting">Managed Cloud VPS</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="heading">NVMe Cloud VPS</div>
              <ul className="footer-menu">
                <li className="menu-item"><a href="nvme-cloud-vps">General NVMe Cloud VPS</a></li>
                <li className="menu-item"><a href="best-webhost-nvme-vps-cloud-server-hosting-price">WebHost NVMe Cloud VPS</a></li>
                <li className="menu-item"><a href="managed-nvme-affordable-vps-hosting">Managed NVMe Cloud VPS</a></li>
              </ul>
              {/* <div className="heading">Web Hosting</div>
              <ul className="footer-menu">
                <li className="menu-item"><a href="best-cloud-shared-hosting-providers-in-india">Shared Web Hosting</a></li>
                <li className="menu-item"><a href="cloud-managed-hosting-providers-in-india">Managed Web Hosting</a></li>
              </ul> */}
            </div>

            <div className="col-sm-6 col-md-2">
              <div className="heading">Quick Links</div>
              <ul className="footer-menu">
                <li className="menu-item"><Link to='/contact'>Contact Us</Link></li>
                <li className="menu-item"><a href="legal.html#div6">Terms of Services</a></li>
                <li className="menu-item"><a href="legal.html#div7">Acceptable Usage Policy</a></li>
                <li className="menu-item"><a href="legal.html#div2">Privacy Policy</a></li>
                <li className="menu-item"><a href="faq.html">FAQ</a></li>
                <li className="menu-item"><a href="blog">Blog</a></li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-3">
              <a><img className="svg logo-footer" src="img/logo2.png" alt="logo Siteworx cloud"/></a>
              <div className="copyrigh" >©2023 Siteworx Private Limited - All rights reserved</div>
              <div >
                  <strong>For Sales Enquiry</strong>
                  <br></br>
                  Call: <a  href="tel:02262612556">+(91) 858585858585</a> <br></br>
                  Email: <a  href="mailto:sales@intechdc.com">sales@siteworx.in</a>
              </div>

              <div className='footer-icon-container'>
              <div className='footer-icon'>
          <div className='footer-social-icon'><LinkedInIcon sx={{ color: '#0A66C2', fontSize: 25 }} /></div>
          <div className='footer-social-icon'><InstagramIcon sx={{ color: '#E4405F', fontSize: 25 }} /></div>
          <div className='footer-social-icon'><FacebookIcon sx={{ color: '#3b5998', fontSize: 25 }} /></div>
          <div className='footer-social-icon'><PinterestIcon sx={{ color: '#c8232c', fontSize: 25 }} /></div>
        </div>
        </div>
            </div>
           
          



            </div>
            </div>
            </div>
            <div>
              <p style={{textAlign: 'center'}}>©2023 Siteworx cloud Private Limited - All rights reserved</p>
            </div>
    </div>
  )
}

export default Footer