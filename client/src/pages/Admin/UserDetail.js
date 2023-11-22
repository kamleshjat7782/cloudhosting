import React, { useState, useEffect } from "react";
// import { BiDotsVerticalRounded, BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import "./UserDetail.css";
const UserDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);

  // user details

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/user/single-user/${params.slug}`
      );
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  // user orders

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/auth/all-user-orders/${params.slug}`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
    getUser();
  }, []);

  console.log(orders, "orders");
  console.log(user, "user");

  function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const month = date.getMonth() + 1; // Months are 0-based, so add 1
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Determine whether it's AM or PM based on the hours
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    const formattedDateTime = `${month}/${day}/${year} ${formattedHours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return formattedDateTime;
  }
  return (
    <>
      <div className="page-content">
        <div className="card ">
          <div className="card-inner ">
            <div className="card-head ">
              <h2 className="card-title ">User Details</h2>

              <div className="headMenu">
                <div className="back-btn">
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate("/dashboard/admin/users");
                    }}
                  >
                    {/* <BiArrowBack style={{ fontSize: "20px" }} /> */}
                     Back
                  </Button>
                </div>

                <div className="dropdown">
                  <Button
                    // onClick="myFunction()"
                    style={{
                      minWidth: "0px",
                      padding: "6px 10px",
                      marginLeft: "5px",
                    }}
                    className="css-sghohy-MuiButtonBase-root-MuiButton dropbtn"
                    width="10px"
                    variant="contained"
                  >
                    {/* <BiDotsVerticalRounded style={{ fontSize: "25px" }} /> */}
                  </Button>
                  <div id="myDropdown" className="dropdown-content">
                    <a href="#home">Edit</a>
                    <a href="#about">Update</a>
                    <a href="#contact">Suspend</a>
                  </div>
                </div>
              </div>
            </div>
            <h6 className="card-sub-title">User Information</h6>
            <table className="data-details-list">
              <thead>
                <tr>
                  <th className="data-details-head">First Name</th>
                  <th className="data-details-head">User Id</th>
                  <th className="data-details-head">Email Address</th>
                  <th className="data-details-head">Mobile Number</th>
                  <th className="data-details-head">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="data-details-des">{user.name}</td>
                  <td className="data-details-des">{user._id}</td>
                  <td className="data-details-des">{user.email}</td>
                  <td className="data-details-des">{user.phone}</td>
                  <td className="data-details-des">{user.city}</td>
                </tr>
              </tbody>
            </table>
            <div className="gaps-3x"></div>
            <div className="running-plan">
              <h6 className="card-sub-title">Oders Information</h6>
              <table className="data-details-list">
                <thead>
                  <tr>
                    <th className="data-details-head">Plan Name</th>
                    <th className="data-details-head">Price</th>
                    <th className="data-details-head">Cores</th>
                    <th className="data-details-head">Ram</th>
                    <th className="data-details-head">Storage</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {orders.map((o) => (
                    <tr key={o._id}>
                      <td className="data-details-des">{o.products[0].name}</td>
                      <td className="data-details-des">
                        {o.products[0].price} ₹
                      </td>
                      <td className="data-details-des">
                        {o.products[0].core} GB
                      </td>
                      <td className="data-details-des">
                        {o.products[0].ram} Gb
                      </td>
                      <td className="data-details-des">
                        {o.products[0].storage} GB
                      </td>
                    </tr>
                  ))} */}

                  <tr>
                    <td className="data-details-des">
                      <Link to='/dashboard/admin/plandata'>busssss</Link>
                    </td>

                    <td className="data-details-des">₹2000000</td>
                    <td className="data-details-des">100GB</td>
                    <td className="data-details-des">100GB</td>
                    <td className="data-details-des">1000000GB</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="gaps-3x"></div>
            <h6 className="card-sub-title">More Information</h6>
            <table className="data-details-list">
              <thead>
                <tr>
                  <th className="data-details-head">Joining Date</th>
                  <th className="data-details-head">Reg Method</th>
                  <th className="data-details-head">Last Login</th>
                  <th className="data-details-head">Subscription</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="data-details-des">
                    {user.createdAt ? formatDateTime(user.createdAt) : "N/A"}
                  </td>
                  <td className="data-details-des">Email</td>
                  <td className="data-details-des">
                    {user.updatedAt ? formatDateTime(user.updatedAt) : "N/A"}
                  </td>
                  <td className="data-details-des">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
