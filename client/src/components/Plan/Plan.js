import React from 'react';
import "./Plan.css";

const Plan = () => {
  return (
    <>
      <div className="Plans">
        <div>
          <h2 className="Plan-title">Our Plans</h2>
        </div>

        <div className="Plans-plan">
          <div className="plan-container">
            <div className="service-plan-head">
              <div className="plan-head">
                <h1>Personal</h1>
              </div>
              <div className="plan-top-container">
                <div className="plan-price-container">
                  <div className="plan-currency">$</div>
                  <div className="plan-price-box">
                    <div className="plan-price">
                      <p>3456</p>
                    </div>
                  </div>
                  <div className="plan-period">/month</div>
                </div>
              </div>
            </div>

            <div className="plan-content">
              <ul>
                <li>plan name</li>
                <li>plan name</li>
                <li>plan name</li>
                <li>plan name</li>
              </ul>
            </div>
            <div className="service-btn">
              <button className="btn">Buy Now</button>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}

export default Plan