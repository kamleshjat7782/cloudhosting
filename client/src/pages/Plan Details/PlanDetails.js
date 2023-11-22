import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlanDetails = () => {
  const { id } = useParams();

  const [planDetails, setPlanDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hostname, setHostname] = useState();

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

  console.log(planDetails);
  console.log(id);

  return (
    <>
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
        <div class="row">
          <div class="col-12 col-md-8">
            <form action="" method="post" id="cart3">
              <div class="card shadow p-4">
                <h3 class="mb-4 text-primary pb-3 border-bottom">
                  {planDetails?.name}
                </h3>
                <div class="card-body p-0" id="product_description">
                  <div class="mb-3 product_description">
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
              <div class="card shadow p-4 mt-4">
                <h3 class="mb-4  text-primary pb-3 border-bottom">
                  Product Configuration
                </h3>
                <div class="card-body p-0">
                  <dl class="row align-items-center">
                    <dt class="col-md-3 col-12 font-weight-normal">
                      Choose billing cycle:
                    </dt>
                    <dd class="col-md-9 col-12 ">
                      <select
                        class="form-control"
                        name="cycle"
                        onchange="simulateCart('#cart3');"
                      >
                        <option value="m" selected="selected">
                          ₹ {planDetails?.price} INR Monthly{" "}
                        </option>
                        <option value="a">₹{(planDetails?.price)*(11)} INR Annually </option>
                      </select>
                    </dd>
                  </dl>
                  <dl class="row align-items-center">
                    <dt class="col-md-3 col-12 font-weight-normal">
                      Hostname *
                    </dt>
                    <dd class="col-md-9 col-12 ">
                      <input
                        name="domain"
                        type="text"
                        value=""
                        class="form-control"
                      />
                    </dd>
                  </dl>
                  <small>Fields marked with asterisk (*) are required </small>
                </div>
              </div>
              <input name="action" value="addconfig" type="hidden" />
            </form>
          </div>
          <div class="col-12 col-md-4">
            <div
              class="order-summary-box cart-summary p-4 shadow card"
              id="cartSummary"
            >
              <h3 class="mb-4 text-primary pb-3 border-bottom">
                Cart summary{" "}
              </h3>
              <table border="0" cellpadding="0" cellspacing="1" width="100%">
                <tbody>
                  <tr>
                    <td colspan="2">
                      Managed Web Hosting - <strong>mSH-i1</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Setup Fee</td>
                    <td align="right">₹0.00 INR</td>
                  </tr>
                  <tr>
                    <td>Monthly</td>
                    <td align="right">₹ {planDetails?.price} INR</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex flex-column align-items-end summary-section">
                <strong class="font-weight-bold text-uppercase text-muted iconfont-size2">
                  <small>Cart subtotal today: </small>
                </strong>
                <div class="h1 font-weight-bold my-2">
                  <span>₹</span>
                  <span>{planDetails?.price}</span>
                </div>
              </div>
              <form
                action=""
                method="post"
                class="d-flex flex-row justify-content-between align-items-center"
                id="promoform"
                onsubmit="return applyCoupon();"
              >
                <input type="hidden" name="step" value="3" />
                <input
                  type="text"
                  class="form-control form-control-sm mr-2 m-2 py-3"
                  name="promocode"
                  placeholder="Promotional code"
                  aria-label="Promotional code"
                />
                <button
                  type="submit"
                  class="btn btn-sm btn-outline-success py-2 btn-border1px"
                >
                  Submit
                </button>
              </form>
              <a
                href="#"
                class="cartSummaryContinue btn btn-primary w-100 btn-lg"
                onclick="$('#cart3').submit(); return false;"
              >
                Continue
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanDetails;
