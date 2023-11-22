import * as React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PlanData = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Plan-details">
        <div className="card-inner">
          <div className="card-head ">
            <h2 className="card-title">User Plans</h2>
            <div className="headMenu">
              <div className="back-btn">
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate(
                      "/dashboard/admin/user-detail/64e065ab9c776d5837a84cad"
                    );
                  }}
                >
                  <BiArrowBack style={{ fontSize: "20px" }} /> Back
                </Button>
              </div>
            </div>
          </div>

          <div className="cloud">
            <div id="content-cloud">
              <div className="header-bar">
                <h3 className="billing hasicon">Billing Summary</h3>
              </div>
              <div className="content-bar ">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  className="ttable cloud-billing table-rw-stack table-label-value"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td className="title" width="160" align="right">
                        <b>Registration Date</b>
                      </td>
                      <td width="268">23/06/2023</td>
                      <td className="title" align="right" width="160">
                        <b>Status</b>
                      </td>
                      <td width="268">
                        <span className="Cancelled">
                          <strong>Cancelled</strong>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="title" align="right">
                        <b>Recurring Amount</b>
                      </td>
                      <td>
                        ₹1,391,388.00 INR <span className="fs11">(Annually)</span>
                      </td>
                      <td className="title" align="right">
                        <b>Next invoice</b>
                      </td>
                      <td>16/06/2024</td>
                    </tr>
                    <tr>
                      <td className="title" align="right">
                        <b>Expiry Date</b>
                      </td>
                      <td>
                        <span className="break-word ">23/06/2024</span>
                      </td>
                    </tr>
                    <tr>
                      <td align="right">
                        <b>Bandwidth limit</b>
                      </td>
                      <td colspan="3">0 GB / 10000 GB</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mseparator"></div>
                <table className="table table-striped table-aff-center p-top">
                  <tbody>
                    <tr>
                      <td className="w30 bold">OS Template </td>
                      <td>
                        Ubuntu 20.04{" "}
                        <a
                          className="lmore"
                          href="index.php?/clientarea/services/general-cloud-vps---v5/12347/&amp;vpsdo=rebuild&amp;vpsid=&amp;security_token=00f9ce3d9f12b9d3c954e47bfd096fae"
                        >
                          Rebuild
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="w30 bold">Port Speed [Mbps] </td>
                      <td>
                        1 Gbit <br />
                      </td>
                    </tr>
                    <tr>
                      <td className="w30 bold">Data Transfer limit </td>
                      <td>10000 (₹162,000.00 INR)</td>
                    </tr>
                    <tr>
                      <td className="w30 bold">RAM [GB] </td>
                      <td>512 (₹766,500.00 INR)</td>
                    </tr>
                    <tr>
                      <td className="w30 bold">CPU Cores </td>
                      <td>48 (₹70,500.00 INR)</td>
                    </tr>
                    <tr>
                      <td className="w30 bold">Disk Size [GB] </td>
                      <td>1000 (₹45,600.00 INR)</td>
                    </tr>
                    <tr>
                      <td className="w30 bold">Backup Copy Limit </td>
                      <td>60 x copy (₹342,000.00 INR)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanData;
