import { Link } from "react-router-dom";
import Pagination from "../../../../components/Pagination";
import useSysContextRenderPageAutores from "../../../../state/aplication/hooks/useSysContextRenderPageAutores";
import TbodyAutor from "./TbodyAutor";

const AutorSys = () => {
  const { autores, visible, excluir } = useSysContextRenderPageAutores();
  return (
    <>
      <Link
        to="/aplicationsys/autor/adicionar"
        className="btn btn-success btn-custons btn-custons--success"
      >
        <i></i> Adicionar Autor
      </Link>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-user">
            <i></i>
          </span>
          <h5>Autor</h5>
        </div>

        <div className="widget-content nopadding">
          <table className="table table-bordered data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {autores?.content.map((autor) => {
                return (
                  <TbodyAutor
                    key={autor.id}
                    line={autor}
                    excluir={() => excluir(autor)}
                  />
                );
              })}
            </tbody>
          </table>
          {visible ? <Pagination etapaAtual={2} /> : ""}
        </div>
      </div>
    </>
  );
};
export default AutorSys;

/*
    * Exemplo Manual
    axios
      .get<Autor[]>(`${BASE_URL}/autor`, {
        auth: {
          username: "lucas@hotmail.com",
          password: "123",
        },
      })
      .then((res) => {
        setLine(res.data);
      });*/
