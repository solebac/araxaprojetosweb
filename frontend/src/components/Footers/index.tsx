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
                <a
                  href="https://github.com/solebac?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgRedLink}
                    className="rodape__footer--mini"
                    alt="Linkedin"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fl%C3%A1vio-rog%C3%A9rio-722a56159/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgGitHub}
                    className="rodape__footer--mini"
                    alt="GitHub"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="/portifolio">
          <p className="rodape__text copyright">
            © Copyright Araxá Projetos Web - 2022
          </p>
          <p className="rodape__text">Flávio Rogério</p>
          <p className="rodape__text">Java Developer</p>
        </a>
      </footer>
    </>
  );
};

export default Footers;
