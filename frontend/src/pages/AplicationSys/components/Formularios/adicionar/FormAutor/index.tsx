import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/*import { IValues } from "../../../../../../interfaces/forms";*/
import {
  IAutor,
  postAutoresInsertFile,
  ResetAutor,
} from "../../../../../../services/Autor.services";
import { Autor } from "../../../../../../types/autor";
import { carregarImg } from "../../../../../../utils/loadimg";
import ButtonGroups from "../../components/ButtonGroups";

//declare const responseBody: IAutor;

const FormAutor = () => {
  const [image, setImage] = useState("");
  const [imgName, setImgName] = useState("");
  const [autor, setAutor] = useState<Autor>(ResetAutor);

  useEffect(() => {
    if (typeof autor.id === "number" && autor.id !== 0) {
      nav("/aplicationsys/autor");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autor]);

  const nav = useNavigate();
  async function handleGoBack(event: any) {
    event.preventDefault();
    nav("/aplicationsys/autor");
  }
  const handlerCopyImage = async (e: any) => {
    e.preventDefault();
    const data = e.target.files[0];
    //console.log("Loading Imagem...", data); //Test
    setImage(data);
    setImgName(data.name);
    carregarImg(e.target.dataset.imagens, e.target.id);
  };
  const handledFormAutor = async (event: any) => {
    //event: React.FormEvent<HTMLInputElement>
    event.preventDefault();

    // let target   = event.target  as HTMLTextAreaElement;
    let target = event.target;
    //(old-formData)let formData: IValues = {};
    let formData = new FormData();

    for (let i = 0; i < target.length; i++) {
      //(old-formData) formData[target.elements[i].getAttribute("id")] =  target.elements[i].value;
      formData.append(
        target.elements[i].getAttribute("id"),
        target.elements[i].value
      );
    }
    /*
    * Test
    console.log("formData(Full)", formData);
    console.log("formData(Key)", formData.nome);*/
    const responseBody = {} as IAutor;

    responseBody.nome = formData.get("nome") as string;
    responseBody.foto = imgName;
    responseBody.bio = formData.get("bio") as string;
    responseBody.email = formData.get("email") as string;
    responseBody.senha = formData.get("pass") as string;
    responseBody.usuario = formData.get("usuario") as string;
    const dto = JSON.stringify(responseBody);
    const encodeUri = encodeURIComponent(dto);
    let dados = new FormData();
    dados.append("dto", encodeUri);
    dados.append("files", image, imgName);

    //Inativo await postAutores(setAutor, responseBody);
    await postAutoresInsertFile(setAutor, dados);
  };
  return (
    <>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-menu">
            <i></i>
          </span>
          <h5>Cadastro de Autor</h5>
        </div>

        <form
          className="appsys__container"
          onSubmit={handledFormAutor}
          id="form-autor"
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
                <label className="appsys__label" htmlFor="bio">
                  Biografia:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control appsys"
                  id="bio"
                  name="bio"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="email">
                  Email:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control appsys"
                  id="email"
                  name="email"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="usuario">
                  Usuário:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control appsys"
                  id="usuario"
                  name="usuario"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="pass">
                  Password:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control appsys"
                  id="pass"
                  name="pass"
                  placeholder="password"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="foto">
                  Foto:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="file"
                  className="form-control appsys"
                  id="foto"
                  name="foto"
                  data-imagens="target"
                  onChange={handlerCopyImage}
                />
              </div>
              <div className="control-group">
                <div className="col-md-12">
                  <img
                    src=""
                    alt=""
                    id="target"
                    className="img-fluid"
                    style={{
                      //maxHeight: "231px",
                      display: "none",
                      objectFit: "cover",
                      width: "200px",
                      height: "200px",
                      marginBottom: "1.2rem",
                      borderRadius: "200px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <ButtonGroups handledGo={handleGoBack} />
        </form>
      </div>
    </>
  );
};
export default FormAutor;
