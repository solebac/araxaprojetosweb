import "./assets/css/matrix-style.css";
import "./assets/css/matrix-table-style.css";
import FooterSys from "./components/FooterSys";
import NavSys from "./components/NavSys";
import HeaderSys from "./components/HeaderSys";
import BreadcrumbSys from "./components/BreadcrumbSys";
import MatrixContainer from "./components/MatrixContainer";
import MatrixContainerFluid from "./components/MatrixContainerFluid";
import MainContent from "./components/MainContent";

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

const AplicationSys = ({ children }: AuxProps) => {
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
