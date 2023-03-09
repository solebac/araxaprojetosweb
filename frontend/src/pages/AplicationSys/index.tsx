import "./assets/css/matrix-style.css";
import "./assets/css/matrix-table-style.css";
import FooterSys from "./components/FooterSys";
import NavSys from "./components/NavSys";
import HeaderSys from "./components/HeaderSys";
import BreadcrumbSys from "./components/BreadcrumbSys";
import MatrixContainer from "./components/MatrixContainer";
import MatrixContainerFluid from "./components/MatrixContainerFluid";
import MainContent from "./components/MainContent";
import { useEffect } from "react";
import { getToken } from "../../services/Autentication.services";
import { useNavigate } from "react-router-dom";

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

const AplicationSys = ({ children }: AuxProps) => {
  const nav = useNavigate();
  useEffect(() => {
    const test = getToken();
    if (test === null) {
      nav("/login");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //UIX Do System
  return (
    <>
      <MatrixContainer>
        <HeaderSys />
        <NavSys />
        <MainContent>
          <BreadcrumbSys />
          <MatrixContainerFluid>{children}</MatrixContainerFluid>
        </MainContent>
      </MatrixContainer>
      <FooterSys />
    </>
  );
};
export default AplicationSys;

//const { pagina, acao, id } = useParams();
//const { pagina, acao } = useParams();
//console.log(id);

/*const formulario = {
    autor: <FormAutor />,
    categoria: <FormCategoria />,
    posts: <FormPosts />,
    home: <ListaPostsSys />,
  };*/
/*if (id === undefined || id === null) {
    console.log(id);
  }
  if (acao === undefined || acao === null) {
    console.log(acao);
  }
  if (pagina === undefined || pagina === null) {
    console.log(pagina);
  }*/
//console.log(pagina, acao, id);
