import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
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
                        <td>{p.monthlyPrice}</td>
                        <td><button  className=" btn-primary btn"><Link to={`/dashboard/admin/product/${p._id}`} style={{textDecoration:'none', color:'white'}} >Edit</Link></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            
            </div>
          </div>
         
        </div>
      </div>
  );
};

export default Products;
