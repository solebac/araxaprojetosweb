import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getArticlesId,
  putArticlesUpdateFile,
} from "../../../../../../services/Articles.services";
import options from "../../../../../../data/tec.json";
import { storeParseAutor } from "../../../../../../services/Autentication.services";
import http from "../../../../../../utils/http";
import { carregarImg, loadImageServer } from "../../../../../../utils/loadimg";
import { BASE_PEOPLE, BASE_URL } from "../../../../../../utils/requests";
import ButtonGroups from "../../components/ButtonGroups";
import Options from "../../components/Options";
import {
  CategoriaDTO,
  TResetCategoria,
} from "../../../../../../types/CategoriaDTO";
import { AutorDTO, TResetAutor } from "../../../../../../types/AutorDTO";
import { IArtigoDto } from "../../../../../../interfaces/IArtigoDto";
import { TResetArtigoDto } from "../../../../../../types/ArtigoDTO";
import { toast } from "react-toastify";
import { SecaoDTO, TResetSecao } from "../../../../../../types/SecaoDTO";

type Props = {
  articlesId: number;
};

const FormPosts = ({ articlesId }: Props) => {
  const [id, setId] = useState(0);
  const [imageDestaque, setImageDestaque] = useState("");
  const [imageCard, setImageCard] = useState("");
  const [destaque, setDestaque] = useState("");
  const [card, setCard] = useState("");

  const [articles, setArticles] = useState<IArtigoDto>(TResetArtigoDto);
  const [categorias, setCategorias] = useState<[CategoriaDTO]>([
    TResetCategoria,
  ]);
  const [selectCategoria, setSelectCategoria] =
    useState<CategoriaDTO>(TResetCategoria);
  const [autor, setAutor] = useState<AutorDTO>(TResetAutor);
  const [sections, setSections] = useState<[SecaoDTO]>([TResetSecao]);
  const [selectSecao, setSelectSecao] = useState<SecaoDTO>(TResetSecao);
  const [status, setStatus] = useState("");
  const [slog, setSlog] = useState("");

  const nav = useNavigate();

  async function handleGoBack(event: any) {
    event.preventDefault();
    nav("/aplicationsys/posts");
  }
  const handlerCopyImageDestaque = async (e: any) => {
    e.preventDefault();
    const data = e.target.files[0];
    setDestaque(data);
    setImageDestaque(data.name);
    carregarImg(e.target.dataset.imagens, e.target.id);
  };
  const handlerCopyImageMini = async (e: any) => {
    e.preventDefault();
    const data = e.target.files[0];
    setCard(data);
    setImageCard(data.name);
    carregarImg(e.target.dataset.imagens, e.target.id);
  };
  const handlerBlurUrl = (e: any) => {
    const myArray = e.target.value.split(" ");
    let newString = myArray.join("-").toLowerCase();
    var url = document.getElementById("url") as HTMLInputElement;
    url.value = newString;
  };

  const handlerSendPost = async (e: any) => {
    e.preventDefault();
    const responseBody = {} as IArtigoDto;
    var today = new Date();
    const strToday = today.toISOString().slice(0, 10);
    responseBody.id = e.target.postId.value;
    responseBody.titulo = e.target.titulo.value;
    responseBody.dataPublicacao = strToday;
    responseBody.conteudoIntroducao = e.target.introducao.value;
    responseBody.conteudoParagrafoOne = e.target.paragrafoone.value;
    responseBody.conteudoParagrafoTwo = e.target.paragrafotwo.value;
    responseBody.conteudoConclusao = e.target.conclusao.value;
    responseBody.status = e.target.artigoStatus.value;
    responseBody.url = e.target.url.value;
    responseBody.slog = slog; //e.target.slog.value;
    responseBody.imgDestaque = imageDestaque;
    responseBody.imgCard = imageCard;
    responseBody.contador = 0;
    responseBody.autor = autor;
    responseBody.comment = [];
    responseBody.tag = [];
    //responseBody.secao = secao;
    responseBody.secao = {
      id:
        selectCategoria.id === 3 || selectCategoria.id === 4
          ? selectSecao.id
          : null,
      nome:
        selectCategoria.id === 3 || selectCategoria.id === 4
          ? selectSecao.nome
          : null,
    };
    responseBody.categorias = selectCategoria;
    // let target   = event.target  as HTMLTextAreaElement;
    const dto = JSON.stringify(responseBody);
    const encodeUri = encodeURIComponent(dto);

    let formData = new FormData();
    formData.append("dto", encodeUri);
    formData.append("destaque", destaque, imageDestaque);
    formData.append("card", card, imageCard);
    toast.info("Salvando alterações...");
    await putArticlesUpdateFile(articlesId, setId, formData);
  };

  useEffect(() => {
    if (typeof id === "number" && id !== 0) {
      nav("/aplicationsys/posts");
    } else {
      if (typeof articles?.imgCard === "string" && articles?.imgCard !== "") {
        setImageCard(articles?.imgCard);
        loadImageServer(setCard, articles?.imgCard, "imgCard");
      }
      if (
        typeof articles?.imgDestaque === "string" &&
        articles?.imgDestaque !== ""
      ) {
        setImageDestaque(articles?.imgDestaque);
        loadImageServer(setDestaque, articles?.imgDestaque, "imgdestaque");
      }
    }
    const callData = async () => {
      await http.get(`/categoria`).then((res) => {
        const data = res.data;
        setCategorias(data);
      });

      if (selectCategoria.id !== 0) {
        await http
          .get(`section/categoria/single/${selectCategoria.id}`)
          .then((res) => {
            const data = res.data;
            setSections(data);
          });
      } else {
        setSections([TResetSecao]);
      }

      if (
        articles.id === null ||
        articles.id === undefined ||
        articles.id === 0
      ) {
        await getArticlesId(
          setArticles,
          setSelectCategoria,
          setSelectSecao,
          articlesId
        );
      }
    };
    callData().catch(console.error);

    const people = storeParseAutor(localStorage.getItem(BASE_PEOPLE));
    setAutor(people);
    if (articles) {
      setStatus(articles.status);
      setSlog(articles.slog);
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    articles?.imgDestaque,
    articles?.imgCard,
    articles?.id,
    id,
    slog,
    selectCategoria.id,
  ]);
  return (
    <>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-menu">
            <i></i>
          </span>
          <h5>Atualizar Artigo</h5>
        </div>

        <form
          className="appsys__container"
          encType="multipart/form-data"
          onSubmit={handlerSendPost}
        >
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="postId">
                  Código:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control appsys appsys--readOnly"
                  id="postId"
                  name="postId"
                  defaultValue={
                    Number(articles?.id) > 0 ? articles?.id : articlesId
                  }
                  readOnly
                />
              </div>
            </div>
          </div>

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
                  value={selectCategoria.id}
                  onChange={(e) => {
                    var data = categorias?.find((obj) => {
                      return obj.id === Number.parseInt(e.target.value, 10);
                    });
                    setSelectCategoria(data as CategoriaDTO);
                    e.target.value = data?.id.toString() || "";
                  }}
                  style={{ padding: "2px 10px", textTransform: "uppercase" }}
                >
                  <option value="">SELECIONE...</option>
                  {categorias?.map((e) => {
                    return (
                      <option
                        key={e.id}
                        value={e.id}
                        /*selected={
                          Number(Object.values(articles?.categorias)[0]) ===
                          e.id
                            ? true
                            : false
                        }*/
                      >
                        {e.nome}
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
                <label className="appsys__label" htmlFor="artigoSecao">
                  Seção:
                </label>
              </div>
            </div>

            <div className="col-sm-9">
              <div className="form-group">
                <select
                  id="artigoSecao"
                  name="artigoSecao"
                  className="form-control appsys appsys--readOnly"
                  value={selectSecao.id}
                  onChange={(e) => {
                    var data = sections.find((obj) => {
                      return obj.id === Number.parseInt(e.target.value, 10);
                    });
                    setSelectSecao(data as SecaoDTO);
                  }}
                  style={{ padding: "2px 10px", textTransform: "uppercase" }}
                >
                  <option value="">SELECIONE...</option>
                  {sections?.map((e) => {
                    return (
                      <option key={e.id} value={e.id}>
                        {e.nome}
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
                  value={articles?.status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  style={{ padding: "2px 10px", textTransform: "uppercase" }}
                >
                  <option value="">SELECIONE...</option>
                  <option value="RASCUNHO">RASCUNHO</option>
                  <option value="AGENDADO">AGENDADO</option>
                  <option value="PUBLICADO">PUBLICADO</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label className="appsys__label" htmlFor="artigoStatus">
                  Slug:
                </label>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <select
                  id="slog"
                  name="slog"
                  value={articles?.slog}
                  className="form-control appsys appsys--readOnly"
                  onChange={(e) => {
                    setSlog(e.target.value);
                  }}
                  style={{ padding: "2px 10px", textTransform: "uppercase" }}
                >
                  <option value="">SELECIONE...</option>
                  {options.map((item, index) => (
                    <Options option={item.value} slog={slog} key={index} />
                  ))}
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
                  defaultValue={articles?.titulo}
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
                  defaultValue={articles?.conteudoIntroducao}
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
                  defaultValue={articles?.conteudoParagrafoOne}
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
                  defaultValue={articles?.conteudoParagrafoTwo}
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
                  placeholder="Paragrafo"
                  defaultValue={articles?.conteudoConclusao}
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
                    src={`${BASE_URL}/articles/paint/${articles?.imgDestaque}`}
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
                    src={`${BASE_URL}/articles/paint/${articles?.imgCard}`}
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
                  defaultValue={articles?.url}
                  readOnly
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
export default FormPosts;

/*
  * Test
  const getArticlesId = async (id: number) => {
    const promise = axios
      .get(`http://localhost:8080/articles/${id}`, {
        auth: {
          username: "lucas@hotmail.com",
          password: "123",
        },
      })
      .then((res) => {
        setArticles(res.data as Artigo);
      });
    console.log(articles);
  };*/
