import * as React from "react";
import { Link } from "react-router-dom";
import ImgRedLink from "../../assets/img/footer/rede_git.png";
import ImgGitHub from "../../assets/img/footer/rede_linkedin.png";

const Footers = () => {
  return (
    <>
      <footer>
        <div className="cabecalho__footer">
          <Link to="/">
            <span className="img-logo">Araxá Projetos Web</span>
          </Link>
          <div className="rodape__redes">
            <ul className="rodape__footer">
              <li>
                <Link
                  to="https://github.com/solebac?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgRedLink}
                    className="rodape__footer--mini"
                    alt="Linkedin"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/fl%C3%A1vio-rog%C3%A9rio-722a56159/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgGitHub}
                    className="rodape__footer--mini"
                    alt="GitHub"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/portifolio/about">
          <p className="rodape__text copyright">
            © Copyright Araxá Projetos Web - 2018
          </p>
          <p className="rodape__text">Flávio Rogério</p>
          <p className="rodape__text">Java Developer</p>
        </Link>
      </footer>
    </>
  );
};

export default Footers;
