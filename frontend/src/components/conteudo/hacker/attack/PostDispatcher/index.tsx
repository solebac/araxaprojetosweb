import { useEffect, useState } from "react";
import BannerMidde from "./BannerMidde";
import CardRecents from "./CardRecents";
import { ReactComponent as ImgFluxion } from "../../../../../assets/img/card/fluxion.svg";
import CardSection from "./CardSection";
//import CardDispatcher from "./CardDispatcher";
import Pagination from "./Pagination";
import { SecaoCategoria } from "../../../../../types/secao";
import { ArtigoPage } from "../../../../../types/artigo";
import {
  getArticlesPagabledLight,
  getSecao,
  ICategorias,
  ResetPage,
  ResetSecao,
} from "../../../../../services/ArticlesHome.services";
import Dispatche from "./Dispatcher";

const categorias: ICategorias = {
  id: "3",
  nome: "Hacker",
  descricao: "Comentarios Hacker Ethical",
};

const PostDispatcher = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [secao, setSecao] = useState<SecaoCategoria[]>([ResetSecao]);
  const [page, setPage] = useState<ArtigoPage>(ResetPage);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getSecao(3, setSecao);
    getArticlesPagabledLight(setPage, pageNumber, categorias);
    if (page.totalPages === 1) {
      setVisible(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, page.totalPages]);

  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };

  return (
    <>
      <article className="container">
        <div className="row mb-4 mt-1">
          {/*<!--Seção de Destaques-->*/}
          <div className="col-lg-8 col-md-8 col-sm-12">
            <p className="titulo-portifolio">Destaques</p>
            {/*<!--Modelo Painel Begin [loop]-->*/}
            {page?.content.map((item) => {
              return <Dispatche key={item.id} post={item} />;
            })}
            {/*<!--Modelo Painel End-->*/}

            {visible && <Pagination page={page} onChange={handlerPageNumber} />}
          </div>

          {/*<!--Seção de Posts Recents-->*/}
          <aside className="col-lg-4 col-md-4 col-sm-12">
            <p className="titulo-portifolio">Posts</p>

            {secao?.map((item) => {
              return <CardSection key={item.nome} secao={item} />;
            })}

            {/*<!--Seção Banner Fast [Publicidade]-->*/}

            <BannerMidde />

            {/*<!--Begin Seção Mini Banner|Loop[Post]-->*/}
            <div className="card mb-4 mt-4">
              <ImgFluxion aria-label="" className="card-img-top" />
              <div className="card-body">
                <p className="card-title">Card Title</p>
                <p className="card-text">
                  O Kali Linux é uma evolução do Backtrack e pode ser baixado
                  aqui http://www.kali.org, ele é mantido pela mesma empresa de
                  segurança do Backtrack.
                </p>
                <a
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="btn btn-outline-dark btn-sm"
                >
                  Go somewhere
                </a>
              </div>
            </div>
            <CardRecents />
            {/*<!--End Seção Mini Banner-->*/}
          </aside>
        </div>
      </article>
    </>
  );
};
export default PostDispatcher;
