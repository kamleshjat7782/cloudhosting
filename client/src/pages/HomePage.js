import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
// import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import Hero from "../components/Hero/Hero";
import Faq from "../components/Faq/Faq";
import Choose from "../components/Choose/Choose";
import Custom from "./Custom/Custom";
import Plan from "../components/Plan/Plan";
import AboutImg from "../components/About Img/AboutImg";
import { useAuth } from "../context/auth";
// import Reg from "./Auth/Reg";
import whoWeAre from "../Assets/img/whoWeAre.gif";

import {motion} from 'framer-motion';
import {fadeIn} from '../components/ScrollAnimationTrigger'

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useAuth();

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products)
  console.log(categories)

   // Add plan


   const addPlan = async (plan) => {
    if(auth.token !== ''){
    try {
      const { data } = await axios.post("/api/v1/cart/create-cart", {
        plan,
      });
      if (data?.success) {
        toast.success(`Add to Cart`);
        navigate("/addplan-cart")
       
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  }
  else{
    navigate("/login")
  }
  };

  // console.log(Plan)
  // console.log(auth)

  // window.onscroll = () => {
  //   const container = document.getElementsByClassName("transition");
  //   var rect = container[0].getBoundingClientRect();
  //   if (rect.top < 450) {
  //     container[0].classList.add("opacity_01");
  //   } else {
  //     container[0].classList.remove("opacity_01");
  //   }
  //   // console.log(rect);
  // }

  console.log(auth)

  return (
    <Layout title={"ALl Products - Best offers "}>
      
      <Hero />
      
      <div className="container-fluid row mt-3 home-page">
        
        <div className="col-md-12 ">
         
          {/* ************** */}
          <div className="plan-container-main" style={{ display: 'flex', flexWrap: 'wrap', marginLeft:'20px' }}>
            {products?.map((p) => (

              <div className="custom-plan" key={p._id} style={{margin:'20px'}}>
                <div className="plan-container-custom">
                  <div className="custom-plan-head">
                    <div className="plan-head">
                      <h1>{p.name}</h1>
                    </div>
                    <div className="plan-top-container-custom">
                      <div className="Custom-price-container">
                        <div className="plan-currency">
                        <div>₹</div>
                        </div>
                        <div className="Custom-price-box">
                          <div className="plan-price">
                            <span>
                              {p.price}

                            </span>
                          </div>
                        </div>
                        <div className="plan-period">
                          <p>/month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="plan-content-custom">
                    <ul>
                      <li>
                        <b>{p.core} CPU </b> Cores
                      </li>
                      <li>
                        <b>
                          {p.ram}
                          {" GB "}
                        </b>
                        RAM
                      </li>
                      <li>
                        <b>
                          {p.bandwidth}
                          {" GB "}
                        </b>
                        Storage
                      </li>
                      <li>
                        <b>1 TB</b> Bandwidth
                      </li>
                      <li>
                        <b>1 IP</b> Addresses
                      </li>
                      <li>
                        <b>
                        </b>{" "}
                        Free CentOS WP-Cpanel
                      </li>
                      <li>
                        <b>

                        </b>{" "}
                        FREE Set Up!!
                      </li>
                      <li>
                        <b></b>
                        99.9% Uptime Guarantee
                      </li>
                    </ul>
                  </div>
                  <div className="service-btn-custom">
                    {/* <Button
                      variant="contained"
                      className="btn"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                        navigate("/cart")
                      }}

                    >
                      Buy Now
                    </Button> */}
                    {/* <Button
                      variant="contained"
                      className="btn"
                      onClick={() => addPlan(p._id)}
                    >
                      Add Plan
                    </Button> */}
                    {/* <Link to={`/plan-details/${p._id}`}>hello</Link> */}
                    <Button
                      variant="contained"
                      className="btn"
                      onClick={() => navigate(`/plan-details/${p._id}`)}
                    >
                      Add Plan
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* ############## */}

          
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore
                    {/* <AiOutlineReload /> */}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      {/* <Plan/> */}
      {/* <Reg/> */}

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
