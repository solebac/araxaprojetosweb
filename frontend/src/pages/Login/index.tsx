import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
//import imgLogo1 from "../../../../assets/img/logo/logo-02.png";
import imgLogo1 from "../../assets/img/logo/logo-02.png";
import { IAutor } from "../../interfaces/IAutor";
import { ICategoria } from "../../interfaces/ICategoria";

import {
  login,
  storeAutor,
  storeBasic,
  storeToken,
  getToken,
  getResetCategory,
} from "../../services/Autentication.services";
import { sysSetAutor, sysSetCategoria } from "../../state/aplication/atom";
import "./style.css";

const Login = () => {
  const setAutor = useSetRecoilState<IAutor>(sysSetAutor);
  const setSelectCategoria = useSetRecoilState<ICategoria>(sysSetCategoria);

  const nav = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", senha: "" });

  useEffect(() => {
    const test = getToken();

    if (test !== null) {
      nav("/aplicationsys");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      setAutor(user.autor); //Test
      setSelectCategoria(getResetCategory());
      toast.info("Conectando...");
      //var Objects = storeParseAutor(localStorage.getItem(BASE_PEOPLE));
      nav("/aplicationsys"); //teste to back [home]
    } catch (error: any) {
      //Swal.fire("oops!", error.message, "error");
      toast.error("Erro de conexão...");
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
          backgroundColor: "cornsilk",
		  height: "100vh",
        }}
      >
        {/*<Link to="/blog">
          <p>Teste</p>
          <span className="img-logo">Araxá Projetos Web</span>
      </Link> */}
        <div className="login-wrap">
          <div className="login-html">
            <h1 className="tab tab--center">
              <Link to="/" className="menu-lateral__logo--a">
                <img
                  src={imgLogo1}
                  alt="Logotipo Araxá Projetos Web"
                  className="menu-lateral__logo"
                  style={{ margin: "auto" }}
                />
              </Link>
            </h1>

            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab tab--center">
              Entrar
            </label>
            <input id="tab-2" type="radio" name="tab" className="for-pwd" />
            <label htmlFor="tab-2" className="tab tab--center">
              Esqueceu sua senha
            </label>
            <div className="login-form">
              <form className="sign-in-htm" onSubmit={handleFormSubmit}>
                <div className="group">
                  <label htmlFor="email" className="label">
                    Email
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
                    Senha
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
                  {/*<label htmlFor="check">
                    <span className="icon"></span> Mantenha-me conectado
                    </label>*/}
                </div>
                <div className="hr"></div>
                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>
                {/*<div className="hr"></div>
                <div className="foot-lnk">
                  <label htmlFor="tab-2">Esqueceu sua senha?</label>
                </div>*/}
              </form>

              <form className="for-pwd-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Email
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
