import React,{ useContext } from 'react';
import "./Plan.css";
import { Link, useNavigate } from 'react-router-dom'
import { PlanContext } from '../../context/plan';
import { Button } from '@mui/material';

const Plan = () => {
  const plans = useContext(PlanContext);
  const Navigate = useNavigate();

  console.log(plans)
  return (
    <>
     <div className="container-fluid row mt-3 home-page">
        <div className="col-md-12 ">
          <div className="plan-container-main" style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'flex-start', marginLeft:'20px' }}>
            {plans?.map((p) => (

              <div className="custom-plan" key={p._id} style={{margin:'20px'}}>
                <div className="plan-container-custom">
                  <div className="custom-plan-head">
                    <div className="plan-head">
                      <h1>{p.name}</h1>
                    </div>
                    <div className="plan-top-container-custom">
                      <div className="Custom-price-container">
                        <div className="plan-currency">
                        <div>₹</div>
                        </div>
                        <div className="Custom-price-box">
                          <div className="plan-price">
                            <span>
                              {p.monthlyPrice}

                            </span>
                          </div>
                        </div>
                        <div className="plan-period">
                          <p>/month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="plan-content-custom">
                    <ul>
                      <li>
                        <b>{p.core} CPU </b> Cores
                      </li>
                      <li>
                        <b>
                          {p.ram}
                          {" GB "}
                        </b>
                        RAM
                      </li>
                      <li>
                        <b>
                          {p.bandwidth}
                          {" GB "}
                        </b>
                        Storage
                      </li>
                      <li>
                        <b>1 TB</b> Bandwidth
                      </li>
                      <li>
                        <b>1 IP</b> Addresses
                      </li>
                      <li>
                        <b>
                        </b>{" "}
                        Free CentOS WP-Cpanel
                      </li>
                      <li>
                        <b>

                        </b>{" "}
                        FREE Set Up!!
                      </li>
                      <li>
                        <b></b>
                        99.9% Uptime Guarantee
                      </li>
                    </ul>
                  </div>
                  <div className="service-btn-custom">
                    <Button
                      variant="contained"
                      className="btn"
                      onClick={() => Navigate(`/plan-details/${p._id}`)}
                    >
                      Add Plan
                    </Button> 
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ############## */}
          <div className="m-2 p-3">
          </div>
        </div>
      </div>
    </>
  )
}

export default Plan;