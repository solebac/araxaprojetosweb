import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import imgLogo1 from "../../../../assets/img/logo/logo-02.png";
import { clearHeaders } from "../../../../services/Autentication.services";

const mystyle = {
  width: "100%",
  backgroundColor: "#15191c",
  fontFamily: "Arial",
  position: "static",
} as React.CSSProperties;

const NavSys = () => {
  const location = useLocation();
  const myArray = location.pathname.split("/");
  var open = false;
  if (myArray.length > 2) {
    if (
      myArray[2] === "autor" ||
      myArray[2] === "posts" ||
      myArray[2] === "categoria"
    ) {
      open = true;
    }
  }
  const [isOpen, setOpen] = useState(open);
  useEffect(() => {
    hasOpen(isOpen);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nav = useNavigate();
  async function handleLogout(event: any) {
    event.preventDefault();
    window.localStorage.clear();
    clearHeaders();
    nav("/login");
    window.location.reload(); //option clear cache
  }
  function hasOpen(open: boolean) {
    if (open) {
      const menu = document.querySelector(".lateral");
      menu?.classList.add("open");
      setOpen(false); //reset
    }
  }

  return (
    <nav className="menu-lateral">
      <Link to="/" className="menu-lateral__logo--a">
        <img
          src={imgLogo1}
          alt="Logotipo Araxá Projetos Web"
          className="menu-lateral__logo"
        />
      </Link>
      <ul>
        <li
          onClick={() => {
            setOpen(false);
          }}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menu-lateral__link menu-lateral__link--inicio menu-lateral--separator menu-lateral__link--ativo"
                : "menu-lateral__link menu-lateral__link--inicio menu-lateral--separator"
            }
            to="/aplicationsys"
            end
          >
            Home
          </NavLink>
        </li>

        <li className={`dropdown lateral`}>
          <a
            href="/#"
            onClick={(event) => {
              event.preventDefault();
            }}
            className="dropdown-toggle menu-lateral__link menu-lateral__link--cadastros menu-lateral--separator"
            data-toggle="dropdown"
          >
            Cadastros
            <span
              className="caret"
              style={{ position: "absolute", right: "50%" }}
            ></span>
          </a>

          <ul
            className="dropdown-menu dropdown-menu-right"
            style={mystyle}
            role="menu"
          >
            <li
              onClick={() => {
                setOpen(true);
              }}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "submenu-lateral__link--li submenu-lateral__link--li-autor menu-lateral__link--ativo"
                    : "submenu-lateral__link--li submenu-lateral__link--li-autor"
                }
                to="/aplicationsys/autor"
                end
              >
                Autor
              </NavLink>
            </li>
            <li className="menu-lateral--separator"></li>
            <li
              onClick={() => {
                setOpen(true);
              }}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "submenu-lateral__link--li submenu-lateral__link--li-categoria menu-lateral__link--ativo"
                    : "submenu-lateral__link--li submenu-lateral__link--li-categoria"
                }
                to="/aplicationsys/categoria"
                end
              >
                Categorias
              </NavLink>
            </li>
            <li className="menu-lateral--separator"></li>
            <li
              onClick={() => {
                setOpen(true);
              }}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "submenu-lateral__link--li submenu-lateral__link--li-artigos menu-lateral__link--ativo"
                    : "submenu-lateral__link--li submenu-lateral__link--li-artigos"
                }
                to="/aplicationsys/posts"
                end
              >
                Artigos
              </NavLink>
            </li>
            <li className="menu-lateral--separator"></li>
          </ul>
        </li>

        <li
          onClick={() => {
            setOpen(false);
          }}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menu-lateral__link menu-lateral__link--posts menu-lateral--separator menu-lateral__link--ativo"
                : "menu-lateral__link menu-lateral__link--posts menu-lateral--separator"
            }
            to="/aplicationsys/comments"
            end
          >
            Comentários
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menu-lateral__link menu-lateral__link--logout menu-lateral--separator menu-lateral__link--ativo"
                : "menu-lateral__link menu-lateral__link--logout menu-lateral--separator"
            }
            to="/#"
            onClick={handleLogout}
            end
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavSys;
