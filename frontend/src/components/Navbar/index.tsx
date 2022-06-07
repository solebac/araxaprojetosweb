import * as React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-fixed-top navbar-inverse navbar-transparente">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#barra-navigation"
            aria-expanded="false"
          >
            <span className="sr-only">Alterna Navagação</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <span className="img-logo">Araxá Projetos Web</span>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="barra-navigation">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/index.html">Home</a>
            </li>
            <li>
              <a href="/portifolio">Portifólio</a>
            </li>
            <li className="dropdown">
              <a
                href="/#" onClick={(e) => e.preventDefault()}
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hacker <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/ethical.html">Ethical</a>
                </li>
                <li>
                  <a href="/attack.html">Attack</a>
                </li>
                <li>
                  <a href="/cofre.html">Cofre Virus</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/blog.html">Blog</a>
            </li>
            <li>
              <a href="/contato.html">Contato</a>
            </li>
            <li className="divisor" role="separator"></li>
            <li>
              <a href="/#" onClick={(e) => e.preventDefault()}>Increver-se</a>
            </li>
            <li>
              <a href="/#" onClick={(e) => e.preventDefault()}>Entrar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
