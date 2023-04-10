import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IArtigo } from "../../../../interfaces/IArtigo";
import { IPaginacao } from "../../../../interfaces/IPaginacao";
import { getArtigos } from "../../../../services/Articles.services";
import ControlPage from "../ControlPage";
import TbodyArtigos from "./TbodyArtigos";

const ArtigoSys = () => {
  const [line, setLine] = useState<IPaginacao<IArtigo>>();
  const [pageNumber, setPageNumber] = useState(0);

  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };

  useEffect(() => {
    getArtigos(setLine, pageNumber);
  }, [pageNumber]);

  return (
    <>
      <Link
        to="/aplicationsys/posts/adicionar"
        className="btn btn-success btn-custons btn-custons--success"
      >
        <i></i> Adicionar Artigo
      </Link>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-categoria">
            <i></i>
          </span>
          <h5>Postagens Recentes</h5>
        </div>

        <div className="widget-content nopadding">
          <table className="table table-bordered data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Autor</th>
                <th>Titulo</th>
                <th>Categoria</th>
                <th>Publicação</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {line?.content.map((event) => {
                return (
                  <TbodyArtigos
                    key={event.id}
                    line={event}
                    autor={event.autor}
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
export default ArtigoSys;
