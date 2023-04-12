import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IArtigo } from "../../../../interfaces/IArtigo";
import { IPaginacao } from "../../../../interfaces/IPaginacao";
import { getArtigos } from "../../../../services/Articles.services";
import http from "../../../../utils/http";
import ControlPage from "../ControlPage";
import TbodyArtigos from "./TbodyArtigos";

const ArtigoSys = () => {
  const [line, setLine] = useState<IPaginacao<IArtigo>>();
  const [pageNumber, setPageNumber] = useState(0);
  const [status, setStatus] = useState(0);

  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };

  useEffect(() => {
    getArtigos(setLine, pageNumber);
    setStatus(0); //reset
  }, [pageNumber, status]);

  const excluir = (lineExcluir: IArtigo) => {
    http
      .delete(`articles/${lineExcluir.id}`)
      .then((resp) => {
        toast.error("Removendo registro...");
        setStatus(resp.status);
      })
      .catch((error) => console.error(error));
  };

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
          <h5>Artigos publicados</h5>
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
              {line?.content.map((artigo) => {
                return (
                  <TbodyArtigos
                    key={artigo.id}
                    line={artigo}
                    autor={artigo.autor}
                    excluir={() => excluir(artigo)}
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
