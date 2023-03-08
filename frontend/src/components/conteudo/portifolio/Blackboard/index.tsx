import React, { useEffect, useState } from "react";
import {
  getArticlesPagabledLight,
  ICategorias,
  ResetPage,
} from "../../../../services/ArticlesHome.services";
import { ArtigoPage } from "../../../../types/artigo";
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

  useEffect(() => {
    getArticlesPagabledLight(setPage, pageNumber, categorias);
    //eslint-disable-next-line react-hooks/exhaustive-deps
    if (page.totalPages > 1) {
      setVisible(true);
    }
  }, [pageNumber, page.totalPages]);

  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };

  return (
    <>
      <aside className="col-md-8 portifolio-blog">
        {page?.content?.map((item) => {
          return <CardDispatcher key={item.id} post={item} />;
        })}
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
