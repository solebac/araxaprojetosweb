import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../services/Autentication.services";
import "./navbar.css";

const Navbar = () => {
  const [logon, setLogon] = useState(false);
  const [title, setTitle] = useState("Entrar");
  const test = getToken();
  const nav = useNavigate();
  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    hasToggle(logon);
  }, [logon]);

  function handleClick(event: any) {
    event.preventDefault();
    if (!(test === null)) {
      setLogon(true);
      nav("/aplicationsys");
    } else {
      nav("/login");
    }
  }
  function hasToggle(e: boolean) {
    if (test === null) {
      setTitle("Entrar");
    } else {
      setTitle("Control");
    }
  }

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
          <Link className="navbar-brand" to="/">
            <span className="img-logo">Araxá Projetos Web</span>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="barra-navigation">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portifolio">Portifólio</Link>
            </li>
            <li className="dropdown">
              <Link
                to="/#"
                onClick={(e) => e.preventDefault()}
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hacker <span className="caret"></span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/hacker/ethical">Ethical</Link>
                </li>
                <li>
                  <Link to="/hacker/attack">Attack</Link>
                </li>
                <li>
                  <Link to="/hacker/quarentena">Cofre Virus</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li className="divisor" role="separator"></li>
            <li>
              <Link to="/#" onClick={(e) => e.preventDefault()}>
                Increver-se
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick}>
                {title}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
