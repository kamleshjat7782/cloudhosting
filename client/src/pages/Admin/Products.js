import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import { Button,  } from "antd";
import Button from '@mui/material/Button';
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
      <div className="row ">
       
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="Plans">
            <div className="Plans-plan">
              <div className="container mt-4">
                {/* <h1>React Bootstrap Table</h1> */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>Plan</th>
                      <th>core</th>
                      <th>ram</th>
                      <th>price</th>
                      <th>Edit Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((p) => (
                      <tr key={p._id}>
                        <td>{p.name}</td>
                        <td>{p.core}</td>
                        <td>{p.ram}</td>
                        <td>{p.price}</td>
                        {/* <td>{p.slug}</td> */}
                        <td><button  className=" btn-primary btn"><Link to={`/dashboard/admin/product/${p.slug}`} style={{textDecoration:'none', color:'white'}} >Edit</Link></button></td>
                        {/* <td><Button variant="contained" className="btn"><Link to={`/dashboard/admin/product/${p.slug}`} >Edit</Link></Button></td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* {products?.map((p) => (

          <div className="plan-container"  key={p._id} >
            <div className="service-plan-head">
              <div className="plan-head">
                <h1>Personal</h1>
              </div>
              <div className="plan-top-container">
                <div className="plan-price-container">
                  <div className="plan-currency">$</div>
                  <div className="plan-price-box">
                    <div className="plan-price">
                      <p>
                      {p.price.toLocaleString("en-US", 
                      // {
                      //   style: "currency",
                      //   currency: "USD",
                      // }
                      )}
                      </p>
                    </div>
                  </div>
                  <div className="plan-period">/month</div>
                </div>
              </div>
            </div>
            <div className="plan-content">
              <ul> 
                <li>{p.name}</li>
                <li>{p.description.substring(0, 60)}...</li>
                <li>plan name</li>
                <li>plan name</li>
              </ul>
            </div>
            <div className="service-btn">
              <button className="btn"><Link to={`/dashboard/admin/product/${p.slug}`} >Edit</Link></button>
            </div>
          </div>

))} */}
            </div>
          </div>
          {/* <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div> */}
        </div>
      </div>
  );
};

export default Products;
