import { useEffect, useState } from "react";
import { IArtigo } from "../../../../interfaces/IArtigo";
import { IAutor } from "../../../../interfaces/IAutor";
import { ICategoria } from "../../../../interfaces/ICategoria";
import { IPaginacao } from "../../../../interfaces/IPaginacao";
import { ResetAutor, ResetCategoria } from "../../../../interfaces/reset";
import { postArticlesOfAutor } from "../../../../services/Articles.services";
import { storeParseAutor } from "../../../../services/Autentication.services";
import { getCategoriasId } from "../../../../services/Categoria.services";
import http from "../../../../utils/http";
import { BASE_PEOPLE } from "../../../../utils/requests";
import ControlPage from "../ControlPage";
import SelectOption from "./SelectOption";
import TbodyListPost from "./TbodyListPosts";
interface MultiDataArticles {
  autor: IAutor;
  categoria: ICategoria;
}
const ListaPostsSys = () => {
  const [line, setLine] = useState<IPaginacao<IArtigo>>();
  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  const [selectCategoria, setSelectCategoria] =
    useState<ICategoria>(ResetCategoria);
  const [autor, setAutor] = useState<IAutor>(ResetAutor);
  const [pageNumber, setPageNumber] = useState(0);
  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };
  const getPosts = async (num: number) => {
    const responseBody = {} as MultiDataArticles;
    responseBody.autor = autor;
    responseBody.categoria = selectCategoria;
    if (Number(autor.id) > 0 || Number(selectCategoria.id) > 0) {
      await postArticlesOfAutor(setLine, responseBody, num);
    }
  };
  const [next, setNext] = useState(0);
  useEffect(() => {
    if (next === 0) {
      const fetchData = async () => {
        await getCategoriasId(setSelectCategoria, 2);
        await http.get(`/categoria`).then((res) => {
          const data = res.data;
          setCategorias(data);
          setNext(1);
        });
      };
      fetchData().catch(console.error);
    } else if (next === 1) {
      const fetchData = async () => {
        const people = await storeParseAutor(localStorage.getItem(BASE_PEOPLE));
        setAutor(people);
        setNext(2);
      };
      fetchData().catch(console.error);
    } else {
      getPosts(pageNumber);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, next, line?.totalPages]);
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
              value={selectCategoria.id}
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
                {line?.content.map((event) => {
                  return (
                    <TbodyListPost
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
      </section>
    </>
  );
};
export default ListaPostsSys;
