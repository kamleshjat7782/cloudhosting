import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      console.log('hello')
      // getSimilarProduct(data?.product._id, data?.product.category._id);  
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  // const getSimilarProduct = async (pid, cid) => {
  //   try {
  //     const { data } = await axios.get(
  //       `/api/v1/product/related-product/${pid}/${cid}`
  //     );
  //     setRelatedProducts(data?.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log(product)
  return (
    <Layout>
      <div className="row container product-details">
       
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6> {product.name}</h6>
          <h6> Ram {product.ram} GB </h6>
          <h6> core {product.core} GB </h6>
          <h6> Bandwidth {product.ram} GB </h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
        <div className="col-md-6">
          <div>
            <h3></h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
