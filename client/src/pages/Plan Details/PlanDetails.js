import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../context/cart";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import Layout from "../../components/Layout/Layout";

const PlanDetails = () => {
  const { id } = useParams();

  const [planDetails, setPlanDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hostname, setHostname] = useState();
  const [cart, setCart] = useCart();
  const [billingCycle, setBillingCycle] = useState('Monthly');
  const navigate = useNavigate();

  const getPlanDetails = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/get-product/${id}`);
      setLoading(false);
      setPlanDetails(data.product);
    } catch (error) {
      setLoading(false);
      setError(error); // Capture the error for display
    }
  };

  useEffect(() => {
    getPlanDetails();
  }, [id]);

  const getBillingCyclePrice = () => {
    switch (billingCycle) {
      case 'Monthly':
        return planDetails?.monthlyPrice;
      case 'Quarterly':
        return planDetails?.quarterlyPrice;
      case 'HalfYearly':
        return planDetails?.halfYearlyPrice;
      case 'Annually':
        return planDetails?.yearlyPrice;
      default:
        return 0;
    }
  };

  const applyCoupon = () =>{

  }

  console.log(planDetails);
  console.log(cart, 'cart');

  return (
    <>
    <Layout>
      {loading && <p>Loading...</p>}
      {/* {error && <p>Sorry, there was an error loading the data. Please try again later.</p>}
      {planDetails && (
          <div className='single-plan'>
            <h2>{planDetails.core}</h2>
          </div>
        )} */}

      <div
        className="single-plan-details-container"
        style={{ padding: "40px" }}
      >
        <div className="row">
          <div className="col-12 col-md-8">
            <form action="" method="post" id="cart3">
              <div className="card shadow p-4">
                <h3 className="mb-4 text-primary pb-3 border-bottom">
                  {planDetails?.name}
                </h3>
                <div className="card-body p-0" id="product_description">
                  <div className="mb-3 product_description">
                    <ul>
                      <li>Lite Speed Enterprise</li>
                      <li>Unique Account Isolation</li>
                      <li>Free cPanel</li>
                      <li>
                        Custom PHP Versions 7.4, 7.3, 7.2, 7.1, 7.0 &amp; 5.6
                      </li>
                      <li>1-Click installation</li>
                      <li>
                        Ruby on Rails, Perl, Python, SSH and MySQL Databases.
                      </li>
                      <li>Softaculous</li>
                      <li>Free automatic SSL installation</li>
                      <li>AutoBackup</li>
                      <li>SSD Storage</li>
                      <li>Hardware Redundancy</li>
                      <li>Power Redundancy</li>
                      <li>LXC-based Stability</li>
                      <li>Anti-Hack Systems &amp; Help</li>
                      <li>Proactive Updates and Patches</li>
                      <li>24x7 Support</li>
                      <li>Managed Service</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card shadow p-4 mt-4">
                <h3 className="mb-4  text-primary pb-3 border-bottom">
                  Product Configuration
                </h3>
                <div className="card-body p-0">
                  <dl className="row align-items-center">
                    <dt className="col-md-3 col-12 font-weight-normal">
                      Choose billing cycle:
                    </dt>
                    <dd className="col-md-9 col-12 ">
                      <select
                        className="form-control"
                        name="cycle"
                        value={billingCycle}
                        onChange={(e) => setBillingCycle(e.target.value)}
                      >
                        <option value="Monthly" selected="selected" > ₹ {planDetails?.monthlyPrice} INR Monthly{" "} </option>
                        <option value= "Quarterly"> ₹ {(planDetails?.quarterlyPrice)} INR Quarterly </option>
                        <option value= "HalfYearly"> ₹ {(planDetails?.halfYearlyPrice)} INR HalfYearly </option>
                        <option value= "Annually"> ₹ {(planDetails?.yearlyPrice)} INR Annually </option>
                      </select>
                    </dd>
                  </dl>
                  <dl className="row align-items-center">
                    <dt className="col-md-3 col-12 font-weight-normal">
                      Hostname *
                    </dt>
                    <dd className="col-md-9 col-12 ">
                      <input
                        name="domain"
                        type="text"
                        value={hostname}
                        className="form-control"
                        required
                      />
                    </dd>
                  </dl>
                  <small>Fields marked with asterisk (*) are required </small>
                </div>
              </div>
              <input name="action" value="a" type="hidden" />
            </form>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="order-summary-box cart-summary p-4 shadow card"
              id="cartSummary"
            >
              <h3 className="mb-4 text-primary pb-3 border-bottom">
                Cart summary{" "}
              </h3>
              <table border="0" cellPadding="0" cellSpacing="1" width="100%">
                <tbody>
                  <tr>
                    <td colSpan="2">
                      Managed Web Hosting - <strong>mSH-i1</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Setup Fee</td>
                    <td align="right">₹0.00 INR</td>
                  </tr>
                  <tr>
                    <td>{billingCycle}</td>
                    <td align="right">₹ {getBillingCyclePrice()} INR</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex flex-column align-items-end summary-section">
                <strong className="font-weight-bold text-uppercase text-muted iconfont-size2">
                  <small>Cart subtotal today: </small>
                </strong>
                <div className="h1 font-weight-bold my-2">
                  <span>₹</span>
                  <span>{getBillingCyclePrice()}</span>
                </div>
              </div>
              <form
                action=""
                method="post"
                className="d-flex flex-row justify-content-between align-items-center"
                id="promoform"
                onSubmit={applyCoupon()}
              >
                <input type="hidden" name="step" value="3" />
                <input
                  type="text"
                  className="form-control form-control-sm mr-2 m-2 py-3"
                  name="promocode"
                  placeholder="Promotional code"
                  aria-label="Promotional code"
                />
                <button
                  type="submit"
                  className="btn btn-sm btn-outline-success py-2 btn-border1px"
                >
                  Submit
                </button>
              </form>
              {/* <a
                href="#"
                className="cartSummaryContinue btn btn-primary w-100 btn-lg"
                onclick="$('#cart3').submit(); return false;"
              >
                Continue
              </a>{" "} */}

<Button
  variant="contained"
  className="btn"
  onClick={() => {
    const itemToAdd = {
      ...planDetails,
      billingCycle: document.querySelector('[name="cycle"]').value,
      hostname: document.querySelector('[name="domain"]').value
    };
    setCart([...cart, itemToAdd]);
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, itemToAdd])
    );
    toast.success("Item Added to cart");
    navigate("/cart");
  }}
>
  Buy Now
</Button>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default PlanDetails;
