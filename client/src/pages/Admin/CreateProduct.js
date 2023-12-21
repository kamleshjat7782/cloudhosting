import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [storage, setStorage] = useState("");
  const [core, setCore] = useState("");
  const [ram, setRam] = useState("");
  const [bandwidth, setBandwidth] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [quarterlyPrice, setQuarterlyPrice] = useState("");
  const [halfYearlyPrice, setHalfYearlyPrice] = useState("");
  const [yearlyPrice, setYearlyPrice] = useState("");

  

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("storage", storage);
      productData.append("core", core);
      productData.append("ram", ram);
      productData.append("bandwidth", bandwidth);
      productData.append("monthlyPrice", monthlyPrice);
      productData.append("quarterlyPrice", quarterlyPrice);
      productData.append("halfYearlyPrice", halfYearlyPrice);
      productData.append("yearlyPrice", yearlyPrice);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      console.log(productData)
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        console.log('Product Created Successfully')
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
      <div className="container-fluid m-3 p-3 ">
        <div className="row">
         
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
              <input
                type="number"
                value={monthlyPrice}
                placeholder="Monthly Price"
                className="form-control"
                onChange={(e) => setMonthlyPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                value={quarterlyPrice}
                placeholder="Quarterly Price"
                className="form-control"
                onChange={(e) => setQuarterlyPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                value={halfYearlyPrice}
                placeholder="Half Yearly Price"
                className="form-control"
                onChange={(e) => setHalfYearlyPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                value={yearlyPrice}
                placeholder="Yearly Price"
                className="form-control"
                onChange={(e) => setYearlyPrice(e.target.value)}
              />
            </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={core}
                  placeholder="write a core"
                  className="form-control"
                  onChange={(e) => setCore(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={ram}
                  placeholder="write a ram"
                  className="form-control"
                  onChange={(e) => setRam(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={storage}
                  placeholder="write a storage"
                  className="form-control"
                  onChange={(e) => setStorage(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={bandwidth}
                  placeholder="write a bandwidth"
                  className="form-control"
                  onChange={(e) => setBandwidth(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CreateProduct;
