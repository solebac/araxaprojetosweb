import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ICategoria } from "../../../../interfaces/ICategoria";
import { IPaginacao } from "../../../../interfaces/IPaginacao";
import { getCategoriasPage } from "../../../../services/Categoria.services";
import http from "../../../../utils/http";
import ControlPage from "../ControlPage";
import TbodyCategoria from "./TbodyCategoria";
const CategoriaSys = () => {
  const [line, setLine] = useState<IPaginacao<ICategoria>>();
  const [pageNumber, setPageNumber] = useState(0);
  const [status, setStatus] = useState(0);
  function handlerPageNumber(page: number) {
    setPageNumber(page);
  }

  useEffect(() => {
    if (!(status === 404)) {
      getCategoriasPage(setLine, pageNumber);
    } else {
      toast.warning(
        "Registro não pode ser removido, pois possui referencia com outros registros...!"
      );
    }

    setStatus(0);
  }, [pageNumber, status]);

  const excluir = (lineExcluir: ICategoria) => {
    http
      .delete(`categoria/${lineExcluir.id}`, {
        validateStatus(status) {
          return (status >= 200 && status < 300) || status === 404;
        },
      })
      .then((resp) => {
        setStatus(resp.status);
        if (resp.status === 204) {
          toast.success("Registro removido com sucesso...!");
        }
      })
      .catch((error) => console.log(error));
  };

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
              {line?.content.map((cat) => {
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
          <ControlPage page={line} onChange={handlerPageNumber} />
        </div>
      </div>
    </>
  );
};
export default CategoriaSys;
