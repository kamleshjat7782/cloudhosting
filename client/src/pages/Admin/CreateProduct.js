import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  // const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [storage, setStorage] = useState("");
  const [core, setCore] = useState("");
  const [ram, setRam] = useState("");
  const [bandwidth, setBandwidth] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      // productData.append("quantity", quantity);
      productData.append("storage", storage);
      productData.append("category", category);
      productData.append("core", core);
      productData.append("ram", ram);
      productData.append("bandwidth", bandwidth);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      console.log(productData)
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
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
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              
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
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
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
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
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
