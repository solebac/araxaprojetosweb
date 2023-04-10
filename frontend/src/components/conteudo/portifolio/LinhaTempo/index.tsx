import React, { useEffect, useState } from "react";
import { ReactComponent as ImgFrs } from "../../../../assets/img/pessoal/Flavio-sf.svg";
import ImgRedLink from "../../../../assets/img/footer/rede_git.png";
import ImgGitHub from "../../../../assets/img/footer/rede_linkedin.png";
import { ReactComponent as ImgMenu } from "../../../../assets/img/navs/menu.svg";
import { NavLink, useNavigate } from "react-router-dom";

const LinhaTempo = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  function hasToggle() {
    /*const botao = document.getElementById("menu-portifolio");*/
    const menu = document.querySelector(".portifolio-menu__lateral");
    menu?.classList.toggle("portifolio-menu__lateral--ativo");
  }
  useEffect(() => {
    if (isOpen) {
      hasToggle();
    }
  }, [isOpen]);
  function handleClick(event: any) {
    event.preventDefault();
    hasToggle();
    setOpen(false);
    console.log("toggle");
  }
  return (
    <>
      <aside className="col-md-4 portifolio__linha portifolio-reset">
        <header className="portifolio__linha-tempo">
          <ImgFrs className="portifolio__img" aria-label="Flávio Rogério" />

          <p className="portifolio__name mt-4">Flávio Rogério</p>

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
            <li className="menu-portifolio--ativo">
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <ImgMenu
                  style={{ border: "3px solid #fff", padding: "2px" }}
                  id="menu-portifolio"
                  aria-label="Menu"
                  onClick={handleClick}
                />
              </a>
            </li>
          </ul>
        </header>

        <nav className="portifolio-menu__lateral">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "portifolio-menu__lateral--link portifolio-menu__lateral--separator portifolio-menu__lateral--link-ativo"
                : "portifolio-menu__lateral--link portifolio-menu__lateral--separator"
            }
            to="/portifolio"
            onClick={() => {
              setOpen(true);
            }}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "portifolio-menu__lateral--link portifolio-menu__lateral--separator portifolio-menu__lateral--link-ativo"
                : "portifolio-menu__lateral--link portifolio-menu__lateral--separator"
            }
            to="../portifolio/about"
            onClick={() => {
              setOpen(true);
            }}
          >
            Sobre Mim
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "portifolio-menu__lateral--link portifolio-menu__lateral--separator portifolio-menu__lateral--link-ativo"
                : "portifolio-menu__lateral--link portifolio-menu__lateral--separator"
            }
            to="../"
            onClick={() => {
              setOpen(true);
            }}
          >
            Meu Site
          </NavLink>
          <a
            href="/#"
            className="portifolio-menu__lateral--link portifolio-menu__lateral--separator"
            onClick={(e) => {
              e.preventDefault();
              navigate("/aplicationsys");
              //setOpen(true);
            }}
          >
            Meu Sistema
          </a>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "portifolio-menu__lateral--link portifolio-menu__lateral--separator portifolio-menu__lateral--link-ativo"
                : "portifolio-menu__lateral--link portifolio-menu__lateral--separator"
            }
            to="../contato"
            onClick={() => {
              setOpen(true);
            }}
          >
            Contato
          </NavLink>
          <a
            href="/#"
            className="portifolio-menu__lateral--link portifolio-menu__lateral--separator"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
              //setOpen(true);
            }}
          >
            Voltar
          </a>
        </nav>
      </aside>
    </>
  );
};

export default LinhaTempo;
