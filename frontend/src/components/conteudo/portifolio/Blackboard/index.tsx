import { useEffect, useState } from "react";
import {
  getArticlesPagabledLight,
  ICategorias,
  ResetPage,
} from "../../../../services/ArticlesHome.services";
import { ArtigoPage } from "../../../../types/artigo";
import Buscador from "./Buscador";
import CardDispatcher from "./CardDispatcher";
import Pagination from "./Pagination";

const categorias: ICategorias = {
  id: "1",
  nome: "Portifolio",
  descricao: "Documentos Uteis",
};

const Blackboard = () => {
  const [visible, setVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<ArtigoPage>(ResetPage);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    getArticlesPagabledLight(setPage, pageNumber, categorias);
    //eslint-disable-next-line react-hooks/exhaustive-deps
    if (page.totalPages > 1) {
      setVisible(true);
    }
    //console.log(page?.content);
  }, [visible, pageNumber, page.totalPages]);

  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };

  return (
    <>
      <aside className="col-md-8 portifolio-blog">
        <Buscador busca={busca} setBusca={setBusca} />
        <CardDispatcher post={page.content} busca={busca} />
        <section>
          {visible ? (
            <Pagination page={page} onChange={handlerPageNumber} />
          ) : (
            ""
          )}
        </section>
      </aside>
    </>
  );
};
export default Blackboard;
