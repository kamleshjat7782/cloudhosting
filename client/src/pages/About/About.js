import React from "react";
import "./About.css";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Thumb from "../../Assets/img/illustration/Thumb.png";
import img2 from "../../Assets/img/illustration/img2.png";
import img3 from "../../Assets/img/illustration/img3.png";
import s12 from "../../Assets/img/shape/s12.png";
// import "../../Assets/css/animate.css";
// import "../../Assets/css/bootstrap.min.css";
// import "../../Assets/css/responsive.css";

function About() {
 
  return (
    <>
      <div className="orange">
        <div className="about-area default-padding">
          <div className="about">About Us</div>
          <div className="container">
            <div className="about-items">
              <div className="row">
                <div className="col-lg-6 col-md-12 thumb wow fadeInUp">
                  <img className="img-fluid" src={Thumb} />
                </div>
                <div className="col-lg-6 col-md-12 info wow fadeInLeft">
                  <h2>
                    An award winning <br />{" "}
                    <strong>Cheap Web Hosting Provider in India</strong>
                  </h2>
                  <p>
                    Siteworx offers a complete solution for online businesses
                    including Domain Registration, Web Designing, Web
                    Development, App Development, Software Development, MLM
                    Software Development, Web Hosting, VPS Server, Dedicated
                    Server, Email Marketing Server, Business Email, cPanel
                    Licenses Etc. Working 24/7 at your service.
                    <br /> We are very proud that our company is the only
                    company that is living in Jaipur, giving competition to the
                    Hosting agencies of cities like Delhi, Mumbai, Bangalore.
                    <br />
                    It’s a perfect time for you to connect with us and grow with
                    us.
                  </p> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-process-area default-padding-bottom bottom-less">
          <div className="container">
            <div className="process-box text-center">
              <div className="row">
                <div className="single-item col-lg-3 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="500ms">
                    <div className="icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h4>Gsuite</h4>
                    <p>
                      We always do a deep research to make things more better
                      and to know the competitors.
                    </p>
                  </div>
                </div>
                <div className="single-item col-lg-3 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="600ms">
                    <div className="icon">
                      <i className="fas fa-hdd"></i>
                    </div>
                    <h4>Hosting</h4>
                    <p>
                      We gather all the data required to improve the performance
                      of your business.
                    </p>
                  </div>
                </div>
                <div className="single-item col-lg-3 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="700ms">
                    <div className="icon">
                      <i className="fas fa-bullseye"></i>
                    </div>
                    <h4>Cloud Server</h4>
                    <p>
                      We always try to target your desired audience/customers by
                      using various premium tools.
                    </p>
                  </div>
                </div>
                <div className="single-item col-lg-3 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="800ms">
                    <div className="icon">
                      <i className="fas fa-list-alt"></i>
                    </div>
                    <h4>WHM cPanel</h4>
                    <p>
                      You will be able to see for yourself the increase in your
                      sales as a result.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="choose-us-area default-padding-bottom bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 info wow fadeInDown">
                <h2>
                  <strong>
                    Cheap Web Hosting Provider in India - SiteWorx
                  </strong>
                  <br />
                  Offers a Full Range of <br /> <strong>
                    Web Hosting
                  </strong>{" "}
                  Services!
                </h2>
                <p>
                  We offer Cheap Web Hosting services to our clients all over
                  India. We utilize every channel to drive targeted relevant
                  traffic to our clients' website or mobile app or stores and
                  convert them into leads and sales.
                </p>
                <ul>
                  <li>
                    <h5>Global Reach</h5>
                    <p>Upto 100%</p>
                  </li>
                  <li>
                    <h5>Big Experience</h5>
                    <p>Expert Developers</p>
                  </li>
                  <li>
                    <h5>Convenience</h5>
                    <p>To Reach Your Target</p>
                  </li>
                  <li>
                    <h5>Team Strength</h5>
                    <p>Clients Satisfaction</p>
                  </li>
                </ul>
                <p className="color">
                  <em>Connect with us today for free!</em>
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=+91%207004920897&text=Hi"
                  className="btn circle btn-md btn-gradient orange"
                >
                  Connect with Us
                </a>
              </div>
              <div className="col-md-6 col-sm-12 thumb wow fadeInUp">
                <img className="img-fluid" src={img2} width="700" />
              </div>
            </div>
          </div>
        </div>

        <div className="services-area default-padding bottom-less">
          <div className="shape-bottom">
            <img className="img-fluid" src={s12} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="site-heading text-center">
                  <h5>What we do</h5>
                  <h2>
                    Let’s Check Our Most Trusted
                    <br />
                    Cheap Web Hosting
                  </h2>
                  <div className="heading-divider"></div>
                </div>
              </div>
            </div>
            <div className="services-items text-center">
              <div className="row">
                <div className="single-item col-lg-4 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="500ms">
                    <div className="icon">
                      <i className="flaticon-bullhorn"></i>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="#">SEO/SMO/SEM/SMM</a>
                      </h4>
                      <p>
                        SEO tools are used to optimize a website's technical
                        configuration, content relevance and link popularity so
                        its pages can become easily findable, more relevant and
                        popular towards user search queries, and as a
                        consequence, search engines rank them better.
                      </p>
                      <a href="#">
                        <i className="fas fa-arrow-right"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="single-item col-lg-4 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="600ms">
                    <div className="icon">
                      <i className="flaticon-keyword-1"></i>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="#">Superfast website speed and uptime</a>
                      </h4>
                      <p>
                        SiteWorx's web hosting uses advanced server technology
                        and resources to let you experience the best
                        performance, irrespective of what web hosting plan you
                        choose with us.
                      </p>
                      <a href="#">
                        <i className="fas fa-arrow-right"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="single-item col-lg-4 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="700ms">
                    <div className="icon">
                      <i className="flaticon-marketing"></i>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="#">Content Marketing</a>
                      </h4>
                      <p>
                        It's a marketing strategy used to attract, engage, and
                        retain an audience by creating and sharing relevant
                        articles, videos, podcasts, and other media. This
                        approach establishes expertise, promotes brand
                        awareness, and keeps your business top of mind when it's
                        time to buy what you sell.
                      </p>
                      <a href="#">
                        <i className="fas fa-arrow-right"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="single-item col-lg-4 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="800ms">
                    <div className="icon">
                      <i className="flaticon-ppc"></i>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="#">PPC Advertising</a>
                      </h4>
                      <p>
                        Pay-per-click (PPC) is an internet advertising model
                        used to drive traffic to websites, in which an
                        advertiser pays a publisher (typically a search engine,
                        website owner, or a network of websites) when the ad is
                        clicked.
                      </p>
                      <a href="#">
                        <i className="fas fa-arrow-right"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="single-item col-lg-4 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="900ms">
                    <div className="icon">
                      <i className="flaticon-competition"></i>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="#">Competitor Research</a>
                      </h4>
                      <p>
                        The first importance of competitor analysis in SEO is
                        that it enables us to identify who your main competitors
                        in the market are. With that, we can be able to do more
                        analysis to gauge their standing in the market. In so
                        doing, anyone should find both direct business
                        competitors as well as online competitors.
                      </p>
                      <a href="#">
                        <i className="fas fa-arrow-right"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="single-item col-lg-4 col-md-6">
                  <div className="item wow fadeInUp" data-wow-delay="1000ms">
                    <div className="icon">
                      <i className="flaticon-rising"></i>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="#">Website Growth</a>
                      </h4>
                      <p>
                        We use various tools and techniques to increase the
                        performance of your website, increase organic web
                        traffic, find leads from the website by gathering
                        information. Whenever any business like yours is
                        searched, your site will be shown on top.
                      </p>
                      <a href="#">
                        <i className="fas fa-arrow-right"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fun-factor-area bg-gray default-padding-bottom">
          <div className="container">
            <div className="client-items text-center">
              <div className="row">
                <div className="col-lg-3 col-md-6 item">
                  <div className="fun-fact">
                    <div className="timer" data-to="15425" data-speed="3000">
                      15425
                    </div>
                    <span className="medium">Projects Executed</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 item">
                  <div className="fun-fact">
                    <div className="timer" data-to="8745" data-speed="3000">
                      8745
                    </div>
                    <span className="medium">Clients Supported</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 item">
                  <div className="fun-fact">
                    <div className="timer" data-to="235" data-speed="3000">
                      235
                    </div>
                    <span className="medium">Awards Winning</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 item">
                  <div className="fun-fact">
                    <div className="timer" data-to="15" data-speed="3000">
                      15
                    </div>
                    <span className="medium">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="process-area default-padding-bottom bg-gray">
          <div className="container">
            <div className="process-items">
              <div className="row align-center">
                <div className="col-lg-6 col-md-12 thumb">
                  <img className="img-fluid" src={img3} />
                </div>
                <div className="col-lg-6 col-md-12 info">
                  <h2>
                    We love What we Do{" "}
                    <strong>And Helping others Succeed</strong>
                  </h2>
                  <div className="content">
                    <div className="process-content">
                      <div className="icon">
                        <i className="fas fa-angle-right"></i>
                      </div>
                      <h4>
                        <strong>01.</strong> Research
                      </h4>
                      <p>
                        First of all we do a deep research for your business,
                        business-related keywords, your competitors, future
                        growth, customer's problem & much more
                      </p>
                    </div>
                    <div className="process-content">
                      <div className="icon">
                        <i className="fas fa-angle-right"></i>
                      </div>
                      <h4>
                        <strong>02.</strong> Data Collection
                      </h4>
                      <p>
                        We gather complete data for your business growth, like
                        closely examining your website to gain a better
                        understanding of how well the site has been optimized
                        and what can be done to help the site improve.
                      </p>
                    </div>
                    <div className="process-content">
                      <div className="icon">
                        <i className="fas fa-angle-right"></i>
                      </div>
                      <h4>
                        <strong>03.</strong> Targeting
                      </h4>
                      <p>
                        We target the correct audience or potential customers
                        who are using search engines to find businesses like
                        yours. These are the people you want to visit the site.
                        The exact person who has a problem that your
                        product/service can solve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="../../Assets/js/bootstrap.min.js"></script>
        <script src="../../Assets/js/jquery-1.12.4.min.js"></script>
        <script src="../../Assets/js/equal-height.min.js"></script>
        <script src="../../Assets/js/jquery.appear.js"></script>
        <script src="../../Assets/js/modernizr.custom.13711.js"></script>
        <script src="../../Assets/js/wow.min.js"></script>
        <script src="../../Assets/js/progress-bar.min.js"></script>
        <script src="../../Assets/js/isotope.pkgd.min.js"></script>
        <script src="../../Assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="../../Assets/js/count-to.js"></script>
        <script src="../../Assets/js/progresscircle.js"></script>
        <script src="../../Assets/js/main.js"></script>
      </div>
    </>
  );
}

export default About;
