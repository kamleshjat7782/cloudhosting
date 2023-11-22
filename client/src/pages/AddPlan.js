import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

const CartPage = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalGST, setTotalGST] = useState(0);

  const navigate = useNavigate();

  // Fetch cart data from API

  const getCart = async () => {
    try {
      const { data } = await axios.get("/api/v1/cart/single-cart");
      setCart(data.cart);
    } catch (error) {
      console.log('Error fetching cart data :', error);
    }
  };

  const removeCartItem = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/cart/delete-cart/${id}`
      );
      getCart();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDurationChange = async (e, cartId, currentPrice) => {
    const selectedDuration = e.target.value;
    let updatedPrice = currentPrice; // Initialize with the current price

    if (selectedDuration === "quarterly") {
      updatedPrice *= 3;
    } else if (selectedDuration === "yearly") {
      updatedPrice *= 12;
    }

    try {
      const response = await axios.put(`/api/v1/cart/update-cart/${cartId}`, {
        duration: selectedDuration,
        price: updatedPrice, // Send the updated price to the backend
      });
      const updatedCart = response.data.cart;
      setCart(prevCart => (
        prevCart.map(item => {
          if (item._id === cartId) {
            return { ...item, duration: selectedDuration, plan: [{ ...item.plan[0], price: updatedPrice }] };
          }
          return item;
        })
      ));
    } catch (error) {
      console.log('Error updating cart:', error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => acc + item.plan[0].price, 0);
    const totalGST = Math.round(totalPrice * 0.18);
    setTotalPrice(totalPrice);
    setTotalGST(totalGST);
  }, [cart]);

  console.log(cart)

  return (
    <Layout>
      <div className="cart-page">
        {/* Rest of your layout */}
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} items in your cart ${auth?.token ? "" : "please login to checkout !"
                  }`
                  : " Your Cart Is Empty"}
              </p>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7 p-0 m-0">
              {cart.map((p) => (
                <div className="row card flex-row" key={p._id}>
                  <div className=" row col-md-8">
                    {/* Item details */}
                    <div className=" col-md-4">
                      <p>{p.plan[0].name}</p>
                      <p>{p.plan[0].core} GB Core</p>
                      <p>{p.plan[0].ram} GB Ram</p>
                    </div>
                    <div className=" col-md-4">
                      <p>{p.plan[0].bandwidth} GB Storage </p>
                      <p>Price: {p.plan[0].price}</p>
                      <select
                        value={p.duration}
                        onChange={(e) => handleDurationChange(e, p._id, p.plan[0].price)}
                      >
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 cart-remove-btn">
                    {/* Remove button */}
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-5 cart-summary" >
              {/* Cart summary */}
              <h2>Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total Price: {totalPrice}</h4>
              <h4>GST (18%): {totalGST}</h4> {/* Display the GST amount */}
              <h3>Total Price with GST: {totalPrice + totalGST}</h3>
              <Button>Check out</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
