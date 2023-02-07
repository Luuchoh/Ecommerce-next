import React from "react";

import LogoYardSale from "@logos/logo_yard_sale.svg";
import Email from "@icons/email.svg";

import "@styles/SendEmail.scss";

const SendEmail = () => {
  return (
    <div className="send-email">
      <div className="send-email-container">
        <img src={LogoYardSale} alt="logo" className="logo" />

        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className="email-image">
          <img src={Email} alt="email" />
        </div>

        <button className="primary-button login-button">Login</button>

        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
