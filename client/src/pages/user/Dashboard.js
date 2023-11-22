import React from "react";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    
      <div className="container-flui m-3 p-3 dashboard">
        {/* <div className="row"> */}
          
        
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        // </div>
    
   
  );
};

export default Dashboard;
