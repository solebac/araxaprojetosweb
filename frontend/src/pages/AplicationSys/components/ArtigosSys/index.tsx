import { Link } from "react-router-dom";
import Pagination from "../../../../components/Pagination";
import useSysContextRenderPageArtigos from "../../../../state/aplication/hooks/useSysContextRenderPageArtigos";
import TbodyArtigos from "./TbodyArtigos";

const ArtigoSys = () => {
  const { artigos, visible, excluir } = useSysContextRenderPageArtigos();

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
              {artigos?.content.map((artigo) => {
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
          {visible ? <Pagination etapaAtual={0} /> : ""}
        </div>
      </div>
    </>
  );
};
export default ArtigoSys;
