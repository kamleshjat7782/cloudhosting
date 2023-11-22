import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from '../../user/Orders'
import Profile from '../../user/Profile'
import SupportTicket from '../../user/SupportTicket/SupportTicket'
import UserTicketDetails from '../../user/ticketDetails/UserTicketDetails'
import Dashboard from '../../user/Dashboard'

const UserDashboard = () => {
  return (
    <>
    <Routes>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/orders" element={<Orders />} />
        <Route path="user/profile" element={<Profile />} />
        <Route path="user/suport-ticket" element={<SupportTicket />} />
        <Route path="user/user-ticket-detail/:ticketId" element={<UserTicketDetails />} />
        </Routes>
    </>
  )
}

export default UserDashboard;