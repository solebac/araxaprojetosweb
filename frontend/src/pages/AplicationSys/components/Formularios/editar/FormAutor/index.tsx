import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAutorId,
  IAutor,
  putAutoresUpdateFile,
  ResetAutor,
} from "../../../../../../services/Autor.services";
import { Autor } from "../../../../../../types/autor";
import { carregarImg, loadImageServer } from "../../../../../../utils/loadimg";
import { BASE_URL } from "../../../../../../utils/requests";
import ButtonGroups from "../../components/ButtonGroups";

type Props = {
  autorId: number;
};

const FormAutor = ({ autorId }: Props) => {
  const [autor, setAutor] = useState<Autor>(ResetAutor);
  const [id, setId] = useState(0);
  const [image, setImage] = useState("");
  const [imgName, setImgName] = useState("");

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
  const handledFormAutor = async (e: any) => {
    e.preventDefault();
    let target = e.target;
    let formData = new FormData(target);
    const responseBody = {} as IAutor;

    responseBody.id = formData.get("autorId") as string;
    responseBody.nome = formData.get("nome") as string;
    responseBody.foto = imgName; //formData.get("foto") as string;
    responseBody.bio = formData.get("bio") as string;
    responseBody.email = formData.get("email") as string;
    responseBody.senha = formData.get("pass") as string;
    responseBody.usuario = formData.get("usuario") as string;
    //test logica pass
    let confirmPass = formData.get("confirmaPass") as string;
    const dto = JSON.stringify(responseBody);
    const dados = new FormData();
    dados.append("dto", dto);
    dados.append("files", image, imgName);
    console.log(image);
    console.log(responseBody);

    putAutoresUpdateFile(autorId, setId, dados);
  };

  useEffect(() => {
    console.log(`${BASE_URL}/autor/paint/${autor?.foto}`);
    if (typeof id === "number" && id !== 0) {
      nav("/aplicationsys/autor");
    } else {
      if (typeof autor.foto === "string" && autor.foto !== "") {
        loadImageServer(setImage, autor.foto, "foto");
        setImgName(autor.foto);
      }
    }
    const callData = async () => {
      await getAutorId(setAutor, autorId);
    };
    callData().catch(console.error);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autor.id, id]);

  return (
    <>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-menu">
            <i></i>
          </span>
          <h5>Editar de Autor</h5>
        </div>

        <form className="appsys__container" onSubmit={handledFormAutor}>
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="autorId">
                  Codigo:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control appsys appsys--readOnly"
                  id="autorId"
                  name="autorId"
                  readOnly
                  defaultValue={autor?.id > 0 ? autor?.id : autorId}
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
                  name="nome"
                  defaultValue={autor?.nome}
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
                  defaultValue={autor?.bio}
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
                  defaultValue={autor?.email}
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
                  defaultValue={autor?.usuario}
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
                  placeholder="Informe a senha..."
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="confirmaPass">
                  Confirma Password:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control appsys"
                  id="confirmaPass"
                  name="confirmaPass"
                  placeholder="Confirme a senha"
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
                    src={
                      autor?.foto !== ""
                        ? `${BASE_URL}/autor/paint/${autor?.foto}`
                        : ""
                    }
                    alt=""
                    id="target"
                    className="img-fluid"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "200px",
                      height: "200px",
                      //maxHeight: "200px",
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
