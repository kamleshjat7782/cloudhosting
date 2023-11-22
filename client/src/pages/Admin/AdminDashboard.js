import React from "react";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  console.log(auth)
  return (
      <div className="container-fluid m-3 p-3">
        <div className="row">
         
          <div className="col-md-9 row ">
            <div className="card w-25 h-75 p-3">
              <h1>hello</h1>
            </div>
            <div className="card w-25 h-75 p-3">
              <h1>hello</h1>
            </div>
            <div className="card w-25 h-75 p-3">
              <h1>hello</h1>
            </div>
            <div className="card w-25 h-75 p-3">
              <h1>hello</h1>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdminDashboard;
