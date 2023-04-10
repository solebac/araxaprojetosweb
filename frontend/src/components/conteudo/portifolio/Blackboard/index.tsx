import { useEffect, useState } from "react";
import { IArtigo } from "../../../../interfaces/IArtigo";
import { ICategoria } from "../../../../interfaces/ICategoria";
import { IPaginacao } from "../../../../interfaces/IPaginacao";
import { getArticlesPagabledLight } from "../../../../services/ArticlesHome.services";
import Pagination from "../../../Pagination";
import Buscador from "./Buscador";
import CardDispatcher from "./CardDispatcher";

const categorias: ICategoria = {
  id: 1,
  nome: "Portifolio",
  descricao: "Documentos Uteis",
};

const Blackboard = () => {
  const [visible, setVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<IPaginacao<IArtigo>>();
  const [busca, setBusca] = useState("");

  useEffect(() => {
    getArticlesPagabledLight(setPage, pageNumber, categorias);
    if (page && page?.totalPages > 1) {
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, pageNumber, page?.totalPages]);

  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };

  return (
    <>
      <aside className="col-md-8 portifolio-blog">
        <Buscador busca={busca} setBusca={setBusca} />
        <CardDispatcher post={page?.content} busca={busca} />
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
