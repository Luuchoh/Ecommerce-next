import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import SendEmail from "../pages/SendEmail";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import CreateAccount from "../pages/CreateAccount";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import Checkout from "../pages/Checkout";

import "../assets/styles/global.css";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initState = useInitialState();
  return (
    <AppContext.Provider value={initState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="recovery-password" element={<RecoveryPassword />} />
            <Route path="send-email" element={<SendEmail />} />
            <Route path="new-password" element={<NewPassword />} />
            <Route path="account" element={<MyAccount />} />
            <Route path="signup" element={<CreateAccount />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="Orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;