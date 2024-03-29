import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import options from "../../../../../../data/tec.json";
import { postArticlesInsertFile } from "../../../../../../services/Articles.services";
import { storeParseAutor } from "../../../../../../services/Autentication.services";
import http from "../../../../../../utils/http";
import { carregarImg } from "../../../../../../utils/loadimg";
import { BASE_PEOPLE } from "../../../../../../utils/requests";
import ButtonGroups from "../../components/ButtonGroups";
import Options from "../../components/Options";
import { IAutor } from "../../../../../../interfaces/IAutor";
import { AutorDTO, TResetAutor } from "../../../../../../types/AutorDTO";
import {
  CategoriaDTO,
  TResetCategoria,
} from "../../../../../../types/CategoriaDTO";
import { IArtigoDto } from "../../../../../../interfaces/IArtigoDto";
import { toast } from "react-toastify";
import { SecaoDTO, TResetSecao } from "../../../../../../types/SecaoDTO";

const FormPosts = () => {
  const [id, setId] = useState(0);
  const [imageDestaque, setImageDestaque] = useState("");
  const [imageCard, setImageCard] = useState("");
  const [destaque, setDestaque] = useState("");
  //const [destaque, setDestaque] = useState<File | null>(null);
  const [card, setCard] = useState("");
  //const [card, setCard] = useState<File | null>(null);
  const [sections, setSections] = useState<[SecaoDTO]>([TResetSecao]);
  const [selectSecao, setSelectSecao] = useState<SecaoDTO>(TResetSecao);
  const [autor, setAutor] = useState<AutorDTO>(TResetAutor);
  const [categorias, setCategorias] = useState<[CategoriaDTO]>([
    TResetCategoria,
  ]);
  const [selectCategoria, setSelectCategoria] =
    useState<CategoriaDTO>(TResetCategoria);
  const [status, setStatus] = useState("RASCUNHO");
  const [slog, setSlog] = useState("TECNOLOGIA");
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
    carregarImg(e.target.dataset.imagens, e.target.id);
  };
  const handlerCopyImageMini = async (e: any) => {
    e.preventDefault();
    const data1 = e.target.files[0];
    setCard(data1);
    setImageCard(data1.name);
    carregarImg(e.target.dataset.imagens, e.target.id);
  };
  const handlerSendPost = async (e: any) => {
    e.preventDefault();
    const responseBody = {} as IArtigoDto;
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
    responseBody.slog = slog; //e.target.slog.value;
    responseBody.imgDestaque = imageDestaque;
    responseBody.imgCard = imageCard;
    responseBody.contador = 0;
    responseBody.autor = autor;
    responseBody.comment = [];
    responseBody.tag = [];
    /*Old responseBody.secao = {
      id: null,
      nome: null,
    };*/
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
    const dto: string = JSON.stringify(responseBody);
    //console.log("Dto.: ", dto);
    const encodeUri = encodeURIComponent(dto);

    let formData = new FormData();
    formData.append("dto", encodeUri);
    formData.append("destaque", destaque, imageDestaque);
    formData.append("card", card, imageCard);
    toast.success("Salvando...");
    await postArticlesInsertFile(setId, formData);
  };

  const [url, setUrl] = useState("");

  const handlerBlurUrl = (e: any) => {
    const myArray = e.target.value.split(" ");
    let newString = myArray.join("-").toLowerCase();
    setUrl(newString);
  };

  useEffect(() => {
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
    };
    callData().catch(console.error);
    const people: IAutor = storeParseAutor(localStorage.getItem(BASE_PEOPLE));
    setAutor(people);

    if (typeof id === "number" && id !== 0) {
      nav(-1);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, selectCategoria]);

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
                    var data = categorias.find((obj) => {
                      return obj.id === Number.parseInt(e.target.value, 10);
                    });
                    setSelectCategoria(data as CategoriaDTO);
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
                  onChange={(e) => {
                    var data = sections.find((obj) => {
                      return obj.id === Number.parseInt(e.target.value, 10);
                    });
                    setSelectSecao(data as SecaoDTO);
                  }}
                  style={{ padding: "2px 10px", textTransform: "uppercase" }}
                >
                  <option value="">SELECIONE...</option>
                  {sections.map((secao) => {
                    return (
                      <option key={secao.id} value={secao.id}>
                        {secao.nome}
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
                  className="form-control appsys appsys--readOnly"
                  onChange={(e) => {
                    setSlog(e.target.value);
                  }}
                  style={{ padding: "2px 10px", textTransform: "uppercase" }}
                >
                  <option value="">SELECIONE...</option>
                  {options.map((item, index) => (
                    <Options option={item.value} key={index} />
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
                  value={url}
                  readOnly
                />
              </div>
            </div>
          </div>

          <input
            type="hidden"
            className="form-control appsys"
            id="contador"
            name="contador"
            value={0}
          />

          <ButtonGroups handledGo={handleGoBack} />
        </form>
      </div>

      {/*<section>
        <h5>Teste de Imagem 02</h5>
        <img src={`${BASE_URL}/articles/paint/semFotoCard.png`} alt="" />
      </section>*/}
    </>
  );
};
export default FormPosts;
