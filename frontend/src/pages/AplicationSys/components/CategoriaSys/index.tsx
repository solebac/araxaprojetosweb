import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategoria } from "../../../../interfaces/ICategoria";
import { IPaginacao } from "../../../../interfaces/IPaginacao";
import { getCategoriasPage } from "../../../../services/Categoria.services";
import ControlPage from "../ControlPage";
import TbodyCategoria from "./TbodyCategoria";
const CategoriaSys = () => {
  const [line, setLine] = useState<IPaginacao<ICategoria>>();
  const [pageNumber, setPageNumber] = useState(0);
  function handlerPageNumber(page: number) {
    setPageNumber(page);
  }

  useEffect(() => {
    getCategoriasPage(setLine, pageNumber);
  }, [pageNumber]);

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
                return <TbodyCategoria key={cat.id} line={cat} />;
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
