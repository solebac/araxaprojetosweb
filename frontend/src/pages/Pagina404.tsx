import { useNavigate } from "react-router-dom";
import "../assets/css/404.css";

const Pagina404 = () => {
  const navigate = useNavigate();
  return (
    <main className="container flex flex--centro flex--coluna">
      <div className="error-404">
        <div className="error-code m-b-10 m-t-20">
          404 <i className="fa fa-warning"></i>
        </div>
        <h2 className="font-bold">
          Oops 404! Essa página não pode ser encontrada.
        </h2>

        <div className="error-desc">
          Desculpe, mas a página que você está procurando não foi encontrada ou
          não existe. <br />
          Tente atualizar a página ou clique no botão abaixo para voltar à
          página inicial.
          <div>
            <br />
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              <span className="glyphicon glyphicon-home"></span>
              <span className="ml-4">Voltar para a página incial...!</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Pagina404;
