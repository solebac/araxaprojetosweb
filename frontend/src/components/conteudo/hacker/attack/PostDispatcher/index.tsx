import { useEffect, useState } from "react";
import BannerMidde from "./BannerMidde";
import CardRecents from "./CardRecents";
import CardSection from "./CardSection";
import {
  getArticlesPagabledLight,
  getPosts,
  getSecao,
} from "../../../../../services/ArticlesHome.services";
import Dispatche from "./Dispatcher";
import { ISecaoCategoria } from "../../../../../interfaces/ISecao";
import { IArtigo } from "../../../../../interfaces/IArtigo";
import { ICategoria } from "../../../../../interfaces/ICategoria";
import { IPaginacao } from "../../../../../interfaces/IPaginacao";
import { IArtigoRecents } from "../../../../../interfaces/IArtigoRecents";
import Pagination from "../../../../Pagination";

const categorias: ICategoria = {
  id: 3,
  nome: "Hacker",
  descricao: "Comentarios Hacker Ethical",
};

const PostDispatcher = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [secao, setSecao] = useState<ISecaoCategoria[]>([]);
  const [page, setPage] = useState<IPaginacao<IArtigo>>();
  const [visible, setVisible] = useState(false);
  const [recents, setRecents] = useState<IArtigoRecents[]>([]);

  useEffect(() => {
    getSecao(3, setSecao);
    getArticlesPagabledLight(setPage, pageNumber, categorias);
    if (page && page?.totalPages > 1) {
      setVisible(true);
    }
    getPosts(setRecents, 3, categorias.id);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, page?.totalPages]);

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
            {recents.map((item) => {
              return <CardRecents recents={item} key={item.id} />;
            })}

            {/*<!--End Seção Mini Banner-->*/}
          </aside>
        </div>
      </article>
    </>
  );
};
export default PostDispatcher;
