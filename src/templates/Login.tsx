import React, { useRef } from 'react';

import LogoYardSale from '@logos/logo_yard_sale.svg';

import '@styles/Login.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const formData: FormData = new FormData(form.current);
    // const data = {
    //   username: formData.get('email'),
    //   password: formData.get('password'),
    // };
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src={LogoYardSale} alt="logo" className="logo" />

        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" name="email" placeholder="correo@example.cm" className="input input-email" />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />

          <button type="submit" className="primary-button login-button" onClick={handleSubmit}>
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
