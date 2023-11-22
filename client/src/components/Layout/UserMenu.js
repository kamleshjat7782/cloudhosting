import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/user/suport-ticket"
            className="list-group-item list-group-item-action"
          >
            Support Tickets
          </NavLink>
          <NavLink
            to="/dashboard/user/sticket"
            className="list-group-item list-group-item-action"
          >
            Billing
          </NavLink>
          <NavLink
            to="/dashboard/user/manage-ticket"
            className="list-group-item list-group-item-action"
          >
            Server Status
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
