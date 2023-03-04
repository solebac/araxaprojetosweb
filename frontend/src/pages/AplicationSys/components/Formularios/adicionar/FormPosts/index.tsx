import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IArtigo,
  postArticlesInsertFile,
} from "../../../../../../services/Articles.services";
import { storeParseAutor } from "../../../../../../services/Autentication.services";
import { ResetAutor } from "../../../../../../services/Autor.services";
import { ResetCategoria } from "../../../../../../services/Categoria.services";
import { Autor } from "../../../../../../types/autor";
import { Categoria } from "../../../../../../types/categoria";
import { Secao } from "../../../../../../types/secao";
import http from "../../../../../../utils/http";
import { carregarImg } from "../../../../../../utils/loadimg";
import { BASE_PEOPLE, BASE_URL } from "../../../../../../utils/requests";
import ButtonGroups from "../../components/ButtonGroups";

const FormPosts = () => {
  const [id, setId] = useState(0);
  const [imageDestaque, setImageDestaque] = useState("");
  const [imageCard, setImageCard] = useState("");
  const [destaque, setDestaque] = useState("");
  const [card, setCard] = useState("");
  const [secao, setSecao] = useState<Secao>({
    id: 0,
    nome: "",
  });
  const [autor, setAutor] = useState<Autor>(ResetAutor);
  const [categorias, setCategorias] = useState<[Categoria]>([ResetCategoria]);
  const [selectCategoria, setSelectCategoria] =
    useState<Categoria>(ResetCategoria);
  const [status, setStatus] = useState("RASCUNHO");
  const nav = useNavigate();
  async function handleGoBack(event: any) {
    event.preventDefault();
    nav(-1);
  }
  const handlerCopyImageDestaque = async (e: any) => {
    e.preventDefault();
    const data = e.target.files[0];
    setDestaque(data);
    setImageDestaque(data.name);
    carregarImg(e.target.dataset.imagens);
  };
  const handlerCopyImageMini = async (e: any) => {
    e.preventDefault();
    const data = e.target.files[0];
    console.log("Loading Imagem...", data);
    setCard(data);
    setImageCard(data.name);
    carregarImg(e.target.dataset.imagens);
  };
  const handlerSendPost = async (e: any) => {
    e.preventDefault();
    const responseBody = {} as IArtigo;
    //responseBody.id: null;
    var today = new Date();
    const strToday = today.toISOString().slice(0, 10);
    responseBody.titulo = e.target.titulo.value;
    responseBody.dataPublicacao = strToday;
    responseBody.conteudoIntroducao = e.target.introducao.value;
    responseBody.conteudoParagrafoOne = e.target.paragrafoone.value;
    responseBody.conteudoParagrafoTwo = e.target.paragrafotwo.value;
    responseBody.conteudoConclusao = e.target.conclusao.value;
    responseBody.status = status; //e.target.artigoStatus.value;
    responseBody.url = e.target.url.value;
    responseBody.slog = ""; //e.target.slog.value;
    responseBody.imgDestaque = imageDestaque;
    responseBody.imgCard = imageCard;
    responseBody.contador = 0;
    responseBody.autor = autor;
    responseBody.comment = [];
    responseBody.tag = [];
    responseBody.secao = {
      id: "",
      nome: "",
    };
    responseBody.categorias = selectCategoria;

    // let target   = event.target  as HTMLTextAreaElement;
    const dto = JSON.stringify(responseBody);

    let formData = new FormData();
    formData.append("dto", dto);
    formData.append("destaque", destaque, imageDestaque);
    formData.append("card", card, imageCard);

    await postArticlesInsertFile(setId, formData);
  };

  const [url, setUrl] = useState("");

  const handlerBlurUrl = (e: any) => {
    const myArray = e.target.value.split(" ");
    let newString = myArray.join("-").toLowerCase();
    setUrl(newString);
  };

  useEffect(() => {
    http.get(`/categoria`).then((res) => {
      const data = res.data;
      setCategorias(data);
    });
    const people = storeParseAutor(localStorage.getItem(BASE_PEOPLE));
    setAutor(people);
    if (typeof id === "number" && id !== 0) {
      console.log("Reflesh.: ", id);
      nav(-1);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-menu">
            <i></i>
          </span>
          <h5>Cadastro de Artigo</h5>
        </div>

        <form
          className="appsys__container"
          encType="multipart/form-data"
          onSubmit={handlerSendPost}
        >
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="artigoCategoria">
                  Categoria:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <select
                  id="artigoCategoria"
                  name="artigoCategoria"
                  className="form-control appsys appsys--readOnly"
                  onChange={(e) => {
                    console.log(e.target.value);
                    var data = categorias.find((obj) => {
                      return obj.id === Number.parseInt(e.target.value, 10);
                    });
                    setSelectCategoria(data as Categoria);
                  }}
                  style={{ padding: "2px 10px", textTransform: "uppercase" }}
                >
                  <option value="">SELECIONE...</option>
                  {categorias.map((cat) => {
                    return (
                      <option key={cat.id} value={cat.id}>
                        {cat.nome}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="artigoStatus">
                  Status:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <select
                  id="artigoStatus"
                  name="artigoStatus"
                  className="form-control appsys appsys--readOnly"
                  onChange={(e) => {
                    setStatus(e.target.value);
                    console.log(e.target.value);
                  }}
                  style={{ padding: "2px 10px", textTransform: "uppercase" }}
                >
                  <option value="">SELECIONE...</option>
                  <option value="RASCUNHO" selected>
                    RASCUNHO
                  </option>
                  <option value="AGENDADO">AGENDADO</option>
                  <option value="PUBLICADO">PUBLICADO</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="titulo">
                  Titulo:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control appsys"
                  id="titulo"
                  name="titulo"
                  onBlur={handlerBlurUrl}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="introducao">
                  Introdução:
                </label>
              </div>
            </div>

            <div className="col-sm-9">
              <div className="form-group">
                <textarea
                  className="form-control appsys"
                  id="introducao"
                  name="introducao"
                  placeholder="Introdução"
                  rows={10}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="paragrafoone">
                  Paragrafo I:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <textarea
                  className="form-control appsys"
                  id="paragrafoone"
                  name="paragrafoone"
                  placeholder="Paragrafo"
                  rows={10}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="paragrafotwo">
                  Paragrafo II:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <textarea
                  className="form-control appsys"
                  id="paragrafotwo"
                  name="paragrafotwo"
                  placeholder="Paragrafo"
                  rows={10}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="conclusao">
                  Conclusão:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <textarea
                  className="form-control appsys"
                  id="conclusao"
                  name="conclusao"
                  placeholder="Conclusão"
                  rows={10}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="imgdestaque">
                  Imagem destaque:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="file"
                  className="form-control appsys"
                  id="imgdestaque"
                  name="imgdestaque"
                  data-imagens="target"
                  onChange={handlerCopyImageDestaque}
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
                      maxHeight: "320px",
                      display: "block",
                      objectFit: "cover",
                      width: "90%",
                      marginBottom: "1.2rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="imgCard">
                  Imagem Card:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="file"
                  className="form-control appsys"
                  id="imgCard"
                  name="imgCard"
                  data-imagens="target2"
                  onChange={handlerCopyImageMini}
                />
              </div>
              <div className="control-group">
                <div className="col-md-12">
                  <img
                    src=""
                    alt=""
                    id="target2"
                    className="img-fluid"
                    style={{
                      maxHeight: "231px",
                      display: "block",
                      objectFit: "cover",
                      width: "350px",
                      marginBottom: "1.2rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="url">
                  Url:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control appsys"
                  id="url"
                  name="url"
                  defaultValue={url}
                />
              </div>
            </div>
          </div>

          <input
            type="hidden"
            className="form-control appsys"
            id="contador"
            name="contador"
            defaultValue={0}
          />

          <ButtonGroups handledGo={handleGoBack} />
        </form>
      </div>

      <section>
        {/**Modelo Test load [img] image */}
        <h5>Teste de Imagem 02</h5>
        <img src={`${BASE_URL}/articles/paint/semFotoCard.png`} alt="" />
      </section>
    </>
  );
};
export default FormPosts;
