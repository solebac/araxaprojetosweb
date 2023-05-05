import Pagination from "../../../../components/Pagination";
import { ICategoria } from "../../../../interfaces/ICategoria";
import useSysContextRenderPageMain from "../../../../state/aplication/hooks/useSysContextRenderPageMain";
import { IRenderSysPageMain } from "../../../../state/aplication/interfaces/IRenderSysPageMain";
import SelectOption from "./SelectOption";
import TbodyListPost from "./TbodyListPosts";

const ListaPostsSys = () => {
  const { artigos, categorias, visible, setSelectCategoria } =
    useSysContextRenderPageMain<IRenderSysPageMain>(1);
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <div className="form-group">
            <label className="appsys__label" htmlFor="artigoStatus">
              Categoria:
            </label>
          </div>
        </div>
        <div className="col-sm-10">
          <div className="form-group">
            <select
              id="artigoCategoria"
              name="artigoCategoria"
              className="form-control appsys appsys--readOnly"
              //value={selectCategoria.id}
              onChange={(e) => {
                var data = categorias.find((obj) => {
                  return obj.id === Number.parseInt(e.target.value, 10);
                });
                setSelectCategoria(data as ICategoria);
                e.target.value = data?.id.toString() || "";
              }}
              style={{ padding: "2px 10px", textTransform: "uppercase" }}
            >
              {categorias.map((cat) => {
                return <SelectOption cat={cat} key={cat.id} />;
              })}
            </select>
          </div>
        </div>
      </div>
      <section className="table-responsive">
        <div className="widget-box">
          <div className="widget-title">
            {" "}
            <span className="icon">
              <input
                type="checkbox"
                id="title-checkbox"
                name="title-checkbox"
              />
            </span>
            <h5>Postagens Recentes</h5>
          </div>
          <div className="widget-content nopadding">
            <table className="table table-bordered table-striped with-check">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Titulo</th>
                  <th>Publicação</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {artigos?.content.map((artigo) => {
                  return (
                    <TbodyListPost
                      key={artigo.id}
                      line={artigo}
                      autor={artigo.autor}
                    />
                  );
                })}
              </tbody>
            </table>
            {visible ? <Pagination etapaAtual={0} /> : ""}
          </div>
        </div>
      </section>
    </>
  );
};
export default ListaPostsSys;
