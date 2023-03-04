import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  login,
  storeAutor,
  storeBasic,
  storeToken,
} from "../../services/Autentication.services";
import "./style.css";

const Login = () => {
  const nav = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", senha: "" });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      //Passagem das Credencias
      const user = await login(credentials);
      //http.defaults.headers.common.Authorization = `${user.token}`;
      //http.defaults.headers.common.Authorization = `${user.basic}`;
      //Grava o Token|Localstore
      storeToken(user.token);
      storeBasic(user.basic, credentials);
      storeAutor(user.autor);
      //var Objects = storeParseAutor(localStorage.getItem(BASE_PEOPLE));
      nav("/aplicationsys"); //teste to back [home]
    } catch (error: any) {
      Swal.fire("oops!", error.message, "error");
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  return (
    <Fragment>
      <section
        style={{
          margin: "0",
          color: "#edf3ff",
          background:
            "url(https://hdqwalls.com/download/material-design-4k-2048x1152.jpg) no-repeat fixed center",
          backgroundSize: "cover",
        }}
      >
        {/*<Link to="/blog">
          <p>Teste</p>
          <span className="img-logo">Araxá Projetos Web</span>
      </Link> */}
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="for-pwd" />
            <label htmlFor="tab-2" className="tab">
              Forgot Password
            </label>
            <div className="login-form">
              <form className="sign-in-htm" onSubmit={handleFormSubmit}>
                <div className="group">
                  <label htmlFor="email" className="label">
                    Username or Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="input"
                    onChange={handleInputChange}
                    value={credentials.email}
                  />
                </div>
                <div className="group">
                  <label htmlFor="senha" className="label">
                    Password
                  </label>
                  <input
                    id="senha"
                    name="senha"
                    type="password"
                    className="input"
                    data-type="password"
                    onChange={handleInputChange}
                    value={credentials.senha}
                  />
                </div>
                <div className="group">
                  <input
                    id="check"
                    type="checkbox"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="check">
                    <span className="icon"></span> Keep me Signed in
                  </label>
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                  <label htmlFor="tab-2">Forgot Password?</label>
                </div>
              </form>

              <form className="for-pwd-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username or Email
                  </label>
                  <input id="user" type="text" className="input" />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="Reset Password"
                  />
                </div>
                <div className="hr"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
