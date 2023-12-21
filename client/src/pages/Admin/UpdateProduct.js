import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [shipping, setShipping] = useState("");
  const [id, setId] = useState("");
  const [core, setCore] = useState("");
  const [ram, setRam] = useState("");
  const [bandwidth, setBandwidth] = useState("");
  const [storage, setStorage] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [quarterlyPrice, setQuarterlyPrice] = useState("");
  const [halfYearlyPrice, setHalfYearlyPrice] = useState("");
  const [yearlyPrice, setYearlyPrice] = useState("");

  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setShipping(data.product.shipping);
      setCore(data.product.core);
      setRam(data.product.ram);
      setBandwidth(data.product.bandwidth);
      setStorage(data.product.storage);
      setMonthlyPrice(data.product.monthlyPrice);
      setQuarterlyPrice(data.product.quarterlyPrice);
      setHalfYearlyPrice(data.product.halfYearlyPrice);
      setYearlyPrice(data.product.yearlyPrice);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);


  //create product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("core", core);
      productData.append("ram", ram);
      productData.append("bandwidth", bandwidth);
      productData.append("storage", storage);
      productData.append("monthlyPrice", monthlyPrice);
      productData.append("quarterlyPrice", quarterlyPrice);
      productData.append("halfYearlyPrice", halfYearlyPrice);
      productData.append("yearlyPrice", yearlyPrice);
      const { data } = axios.put(
        `/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `/api/v1/product/delete-product/${id}`
      );
      toast.success("Product DEleted Succfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
      <div className="container-fluid m-3 p-3">
        <div className="row">
          
          <div className="col-md-9">
            <h1>Update Product</h1>
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
                  placeholder="write a monthlyPrice"
                  className="form-control"
                  onChange={(e) => setMonthlyPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quarterlyPrice}
                  placeholder="write a quarterlyPrice"
                  className="form-control"
                  onChange={(e) => setQuarterlyPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={halfYearlyPrice}
                  placeholder="write a halfYearlyPrice"
                  className="form-control"
                  onChange={(e) => setHalfYearlyPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={yearlyPrice}
                  placeholder="write a yearlyPrice"
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
                  value={bandwidth}
                  placeholder="write a bandwidth"
                  className="form-control"
                  onChange={(e) => setBandwidth(e.target.value)}
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
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                  value={shipping ? "yes" : "No"}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  UPDATE PRODUCT
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default UpdateProduct;
