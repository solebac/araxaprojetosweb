import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCategoriasId,
  ICategoria,
  putCategoria,
  ResetCategoria,
} from "../../../../../../services/Categoria.services";
import { Categoria } from "../../../../../../types/categoria";
import ButtonGroups from "../../components/ButtonGroups";

type Props = {
  categoriaId: number;
};
const FormCategoria = ({ categoriaId }: Props) => {
  const [id, setId] = useState(0);
  const handledFormCategorias = async (event: any) => {
    event.preventDefault();
    const responseBody = {} as ICategoria;
    responseBody.id = event.target.categoriaId.value;
    responseBody.nome = event.target.nome.value;
    responseBody.descricao = event.target.descricao.value;
    console.log(responseBody);
    await putCategoria(categoriaId, setId, responseBody);
  };
  const [categorias, setCategorias] = useState<Categoria>(ResetCategoria);
  const nav = useNavigate();
  async function handleGoBack(event: any) {
    event.preventDefault();
    nav("/aplicationsys/categoria");
  }
  useEffect(() => {
    if (typeof id === "number" && id !== 0) {
      nav("/aplicationsys/categoria");
    }
    getCategoriasId(setCategorias, categoriaId);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-categoria">
            <i></i>
          </span>
          <h5>Editar Categoria</h5>
        </div>

        <form className="appsys__container" onSubmit={handledFormCategorias}>
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="categoriaId">
                  Codigo:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control appsys appsys--readOnly"
                  id="categoriaId"
                  readOnly
                  defaultValue={categorias.id > 0 ? categorias.id : categoriaId}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="nome">
                  Nome:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control appsys"
                  id="nome"
                  defaultValue={categorias.nome}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="descricao">
                  Descrição:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control appsys"
                  id="descricao"
                  defaultValue={categorias.descricao}
                />
              </div>
            </div>
          </div>

          <ButtonGroups handledGo={handleGoBack} />
        </form>
      </div>
    </>
  );
};
export default FormCategoria;
