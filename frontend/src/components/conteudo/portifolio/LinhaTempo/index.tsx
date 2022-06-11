import React from "react";
import { ReactComponent as ImgFrs } from "../../../../assets/img/pessoal/Flavio-sf.svg";
import ImgRedLink from "../../../../assets/img/footer/rede_git.png";
import ImgGitHub from "../../../../assets/img/footer/rede_linkedin.png";
import { Link } from "react-router-dom";

const LinhaTempo = () => {
  return (
    <>
      <aside className="col-md-4 portifolio__linha portifolio-reset">
        <div className="portifolio__linha-tempo">
          <ImgFrs className="portifolio__img" aria-label="Flávio Rogério" />

          <p className="portifolio__name">Flávio Rogerio</p>

          <p className="portifolio__funcao">Java Developer</p>

          <ul className="portifolio__redes">
            <li>
              <a
                href="https://github.com/solebac?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ImgRedLink}
                  className="portifolio__redes--mini"
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

        <nav className="portifolio-menu__lateral">
          <Link
            className="portifolio-menu__lateral--link portifolio-menu__lateral--separator portifolio-menu__lateral--link-ativo"
            to="/portifolio"
          >
            Home
          </Link>

          <Link className="portifolio-menu__lateral--link portifolio-menu__lateral--separator" to="../">
            Meu Site
          </Link>

          <Link className="portifolio-menu__lateral--link portifolio-menu__lateral--separator" to="../portifolio/about">
            Sobre Mim
          </Link>

          {/*<a href="../portifolio/find.html"
            className="portifolio-menu__lateral--link portifolio-menu__lateral--separator">*/}
          <Link className="portifolio-menu__lateral--link portifolio-menu__lateral--separator" to="../portifolio/find">
            Pesquisa
          </Link>

          <Link className="portifolio-menu__lateral--link portifolio-menu__lateral--separator" to="../contato">
            Contato
          </Link>
        </nav>
      </aside>
    </>
  );
};
export default LinhaTempo;
