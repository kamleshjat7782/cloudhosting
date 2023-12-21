import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from '../../Admin/CreateProduct'
import UpdateProduct from '../../Admin/UpdateProduct'
import Products from '../../Admin/Products'
import Users from '../../Admin/Users'
import UserDetail from '../../Admin/UserDetail'
import AdminTicket from '../../Admin/Adminticket/AdminTicket'
import AdminOrders from '../../Admin/AdminOrders'
import AdminDashboard from '../../Admin/AdminDashboard'
import AdminSupportTicket from '../../Admin/SupportTicket/AdminSuportTicket'

const AdminDashboards = () => {
  return (
    <>
        <Routes>
        <Route path="admin" element={<AdminDashboard />} />
        {/* <Route path="admin/dashboard" element={<AdminDashboard />} /> */}
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="admin/product/:slug" element={<UpdateProduct />} />
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/user-detail/:slug" element={<UserDetail />} />
        <Route path="admin/ticket-detail/:ticketId" element={<AdminTicket />} />
        <Route path="admin/orders" element={<AdminOrders />} />
        <Route path="admin/admin-suport-ticket" element={<AdminSupportTicket />} />
        </Routes>
    </>
  )
}

export default AdminDashboards;