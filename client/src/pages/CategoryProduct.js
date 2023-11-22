import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import { Button } from "antd";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <div className="col-md-12 offset-1">
            <div className="d-flex flex-wrap">
            {products?.map((p) => (

<div className="custom-plan" key={p._id}  style={{margin:'20px'}} >
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
      <Button
        variant="contained"
        className="btn"
        onClick={() => {
          setCart([...cart, p]);
          localStorage.setItem(
            "cart",
            JSON.stringify([...cart, p])
          );
          toast.success("Item Added to cart");
        }}

      >
        Buy Now
      </Button>
    </div>
  </div>
</div>
))}
             
            </div>
            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
