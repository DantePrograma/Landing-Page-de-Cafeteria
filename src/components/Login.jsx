import React, { useId } from "react";
import "./Login.css";

export const Login = () => {
  const userName = useId();
  const userPassword = useId();
  const openButtonId = useId()

  return (
    <>
      <label className="open-login-button" htmlFor={openButtonId}>
        <i className="bi bi-person"></i>
      </label>
      <input type="checkbox" id={openButtonId} hidden />

      <div className="login-container">
        <div className="login-container-inside">
          <div className="top-h1-close">
            <h1>Sing in</h1>
            <label className="close-cart-button" htmlFor={openButtonId}>
              <i className="bi bi-x-lg"></i>
              <p>Cerrar</p>
            </label>
            <input type="checkbox" id={openButtonId} hidden />
          </div>
          <form action="#" className="login-form">
            <div className="login">
            <label htmlFor={userName}>
              Nombre de usuario o correo electronico<p>*</p>
            </label>
            <input type="email" id={userName} required />
            <label htmlFor={userPassword}>Password<p>*</p></label>
            <input type="password" id={userPassword} required />
            <button type="submit">LOG IN</button>
            <div className="remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p className="lost-password">Lost your password?</p>
            </div>

            <div className="login-with">
              <h1>OR LOGIN WITH</h1>
            </div>

            <div className="google-facebook-login">
              <button className="google-button">
                <div className="inside-button">
                <i className="bi bi-google"></i>
                GOOGLE
                </div>
              </button>
              <button className="facebook-button">
              <div className="inside-button">
                <i className="bi bi-facebook"></i>
                FACEBOOK
                </div>
              </button>
            </div>

            <div className="no-account-yet">
            <i className="bi bi-person-x-fill"></i>
              <p>No account yet?</p>
              <button>CREATE AN ACCOUNT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
