import { Link } from "react-router-dom";

const SubMenuSys = () => {
  return (
    <div className="submenu">
      <ul className="quick-actions">
        <li className="bg_ls">
          <Link to="/aplicationsys/posts">
            Artigos
            <h4>
              <i className="submenu-lateral__link--li-artigos submenu-style"></i>
            </h4>
          </Link>
        </li>
        <li className="bg_lb">
          <Link to="/aplicationsys/autor">
            Autores
            <h4>
              <i className="submenu-lateral__link--li-autor submenu-style"></i>
            </h4>
          </Link>
        </li>
        <li className="bg_lg">
          <Link to="/aplicationsys/categoria">
            Categorias
            <h4>
              <i className="submenu-lateral__link--li-categoria submenu-style"></i>
            </h4>
          </Link>
        </li>
        <li className="bg_ly">
          <Link to="/aplicationsys/comments">
            Comentários
            <h4>
              <i className="submenu-lateral__link--li-comments submenu-style"></i>
            </h4>
          </Link>
        </li>
        <li className="bg_lr">
          <a
            href="/#"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Feedback
            <h4>
              <i className="submenu-lateral__link--li-feedback submenu-style"></i>
            </h4>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SubMenuSys;
