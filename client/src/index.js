import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/search";
import { CartProvider } from "./context/cart";
import "antd/dist/reset.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About/About";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import ContactUs from "./pages/Contact Us/ContactUs";
import AddPlan from "./pages/AddPlan";
import PlanDetails from "./pages/Plan Details/PlanDetails";
import Invoice from "./pages/Invoice/Invoice";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "antd/es/transfer/search";
import Reg from "./pages/Auth/Reg";
import { PlanProvider } from "./context/plan";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/addplan-cart" element={<AddPlan />} />
      <Route path="/plan-details/:id" element={<PlanDetails />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route
       path="/dashboard/*" 
       element={
         <AdminRoute redirectTo="/login" >
          <Dashboard />
         </AdminRoute>}>
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<Pagenotfound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
      <PlanProvider>
        <RouterProvider router={router} />
        </PlanProvider>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);


