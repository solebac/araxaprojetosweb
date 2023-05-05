import { Link } from "react-router-dom";
import Pagination from "../../../../components/Pagination";
import useSysContextRenderPageCategorias from "../../../../state/aplication/hooks/useSysContextRenderPageCategorias";
import TbodyCategoria from "./TbodyCategoria";

const CategoriaSys = () => {
  const { categorias, visible, excluir } = useSysContextRenderPageCategorias();

  return (
    <>
      <Link
        to="/aplicationsys/categoria/adicionar"
        className="btn btn-success btn-custons btn-custons--success"
      >
        <i></i> Adicionar Categoria
      </Link>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-categoria">
            <i></i>
          </span>
          <h5>Categorias</h5>
        </div>
        <div className="widget-content nopadding">
          <table className="table table-bordered data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categorias?.content.map((cat) => {
                return (
                  <TbodyCategoria
                    excluir={() => excluir(cat)}
                    key={cat.id}
                    line={cat}
                  />
                );
              })}
            </tbody>
          </table>
          {visible ? <Pagination etapaAtual={1} /> : ""}
        </div>
      </div>
    </>
  );
};
export default CategoriaSys;
