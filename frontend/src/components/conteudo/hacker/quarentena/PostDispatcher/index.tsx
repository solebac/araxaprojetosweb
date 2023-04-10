import { useEffect, useState } from "react";
import CardDispatcher from "./CardDispatcher";
import { getArticlesPagabledLight } from "../../../../../services/ArticlesHome.services";
import { ICategoria } from "../../../../../interfaces/ICategoria";
import { IArtigo } from "../../../../../interfaces/IArtigo";
import { IPaginacao } from "../../../../../interfaces/IPaginacao";
import Pagination from "../../../../Pagination";

const categorias: ICategoria = {
  id: 4,
  nome: "Quarentena",
  descricao: "Virus em quarentena",
};

const PostDispatcher = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<IPaginacao<IArtigo>>();
  const [visible, setVisible] = useState(false);

  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };
  useEffect(() => {
    getArticlesPagabledLight(setPage, pageNumber, categorias);
    //eslint-disable-next-line react-hooks/exhaustive-deps
    if (page && page?.totalPages > 1) {
      setVisible(true);
    }
  }, [pageNumber, page?.totalPages]);

  return (
    <>
      <div className="mt-1">
        {/*<!--Begin seção Retrato-->*/}
        <div className="row">
          {page?.content?.map((item) => {
            return <CardDispatcher key={item.id} post={item} />;
          })}
        </div>

        <div className="row">
          <div className="col-md-12" style={{ float: "left" }}>
            {/*<Pagination page={page} onChange={handlerPageNumber} />*/}
            {visible && <Pagination page={page} onChange={handlerPageNumber} />}
          </div>
        </div>

        {/*<!--end seção Retrato-->*/}
      </div>
    </>
  );
};
export default PostDispatcher;
