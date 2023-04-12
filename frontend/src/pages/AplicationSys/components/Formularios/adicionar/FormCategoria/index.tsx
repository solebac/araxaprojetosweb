import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IValues } from "../../../../../../interfaces/forms";
import { ICategoria } from "../../../../../../interfaces/ICategoria";
import { ResetCategoria } from "../../../../../../interfaces/reset";
import { postCategoria } from "../../../../../../services/Categoria.services";
import ButtonGroups from "../../components/ButtonGroups";

const FormCategoria = () => {
  const [categorias, setCategorias] = useState<ICategoria>(ResetCategoria);
  const nav = useNavigate();

  useEffect(() => {
    if (categorias.id !== 0) {
      nav(-1);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorias]);

  async function handleGoBack(event: any) {
    event.preventDefault();
    nav(-1);
  }
  const handledFormCategorias = async (event: any) => {
    //event: React.FormEvent<HTMLInputElement>
    event.preventDefault();

    const responseBody = {} as ICategoria;
    responseBody.nome = event.target.nome.value;
    responseBody.descricao = event.target.descricao.value;

    await postCategoria(setCategorias, responseBody);
  };

  return (
    <>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-categoria">
            <i></i>
          </span>
          <h5>Cadastro de Categoria</h5>
        </div>

        <form
          className="appsys__container"
          onSubmit={handledFormCategorias}
          id="form-categorias"
        >
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
                  name="nome"
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
                  name="descricao"
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
