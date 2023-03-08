import React, { useEffect, useState } from "react";
/*import { ReactComponent as ImgFluxion } from "../../../../../assets/img/card/fluxion.svg";
import { ReactComponent as ImgGoogle } from "../../../../../assets/img/card/google.svg";
import { ReactComponent as ImgRansomware } from "../../../../../assets/img/card/ransomware.svg";
import { ReactComponent as ImgAlert } from "../../../../../assets/img/card/alert.svg";
import { ReactComponent as ImgTroya } from "../../../../../assets/img/card/troya.svg";
import { ReactComponent as ImgVirus } from "../../../../../assets/img/card/virus.svg";*/
import CardDispatcher from "./CardDispatcher";
import Pagination from "../Pagination";
import { ArtigoPage } from "../../../../../types/artigo";
import {
  getArticlesPagabledLight,
  ICategorias,
  ResetPage,
} from "../../../../../services/ArticlesHome.services";

const categorias: ICategorias = {
  id: "4",
  nome: "Quarentena",
  descricao: "Virus em quarentena",
};

const PostDispatcher = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<ArtigoPage>(ResetPage);
  const [visible, setVisible] = useState(false);

  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };

  useEffect(() => {
    getArticlesPagabledLight(setPage, pageNumber, categorias);
    //eslint-disable-next-line react-hooks/exhaustive-deps
    if (page.totalPages > 1) {
      setVisible(true);
    }
  }, [pageNumber, page.totalPages]);

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
          <div className="col-md-12">
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
