import React from 'react';

import LogoYardSale from '@logos/logo_yard_sale.svg';

import '@styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <div className="new-password">
      <div className="new-password-container">
        <img src={LogoYardSale} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for yue account</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input type="password" id="new-password" placeholder="*********" className="input input-password" />
          <input type="submit" value="Confirm" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
