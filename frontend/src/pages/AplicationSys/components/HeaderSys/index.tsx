import { useEffect, useState } from "react";
import imgLogo from "../../../../assets/img/logo/logo-02.png";
import { storeParseAutor } from "../../../../services/Autentication.services";
import { ResetAutor } from "../../../../services/Autor.services";
import { Autor } from "../../../../types/autor";
import { getLoadImagem } from "../../../../utils/loadimgcss";
import { BASE_PEOPLE, BASE_URL } from "../../../../utils/requests";
const HeaderSys = () => {
  const [isOpen, setOpen] = useState(false);
  const [autor, setAutor] = useState<Autor>(ResetAutor);
  function hasToggle() {
    /*const botao = document.getElementById("menu-portifolio");*/
    const menu = document.querySelector(".menu-lateral");
    menu?.classList.toggle("menu-lateral--ativo");
  }
  useEffect(() => {
    const pepleo = storeParseAutor(localStorage.getItem(BASE_PEOPLE));
    setAutor(pepleo);
    getLoadImagem(`${BASE_URL}/autor/paint/${pepleo?.foto}`, `${pepleo?.foto}`);
    if (isOpen) {
      hasToggle();
    }
  }, [isOpen]);
  function handleClick(event: any) {
    event.preventDefault();
    hasToggle();
    setOpen(false);
  }
  return (
    <header className="matrix-cabecalho">
      <button
        className="matrix-cabecalho__menu btn btn-dark"
        aria-label="Menu"
        onClick={handleClick}
      >
        <i></i>
      </button>
      <img
        src={imgLogo}
        className="matrix-cabecalho__logo"
        alt="Logotipo Araxá Projetos Web"
      />
      <p className="matrix-cabecalho__perfil">{autor?.nome}</p>
      <button
        className="matrix-cabecalho__notificacao btn btn-dark"
        aria-label="Notificação"
      >
        <i></i>
      </button>
    </header>
  );
};
export default HeaderSys;
