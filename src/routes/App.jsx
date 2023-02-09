import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";

import Home from "../templates/Home";
import NotFound from "../templates/NotFound";
import Orders from "../templates/Orders";
import SendEmail from "../templates/SendEmail";
import Login from "../templates/Login";
import RecoveryPassword from "../templates/RecoveryPassword";
import CreateAccount from "../templates/CreateAccount";
import NewPassword from "../templates/NewPassword";
import MyAccount from "../templates/MyAccount";
import Checkout from "../templates/Checkout";

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
