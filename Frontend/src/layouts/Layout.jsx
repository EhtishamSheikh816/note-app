import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const Layout = () => {
  const logoutUser = async () => {
    try {
      await axios.post(`${API}/auth/logout`, {}, { withCredentials: true });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header onLogout={logoutUser} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
