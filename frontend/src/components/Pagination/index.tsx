import React, { Fragment } from "react";
import { ReactComponent as ImgIcoRight } from "../../assets/img/fonts-icon/arrow_right-pag.svg";
import { ReactComponent as ImgIcoLeft } from "../../assets/img/fonts-icon/arrow_left-pag.svg";
import { usePagination } from "../../state/hooks/usePagination";

const Pagination: React.FC<{ etapaAtual: number }> = ({ etapaAtual = 0 }) => {
  const stylePageRight = {
    //Exemplo de componente css
    lineHeight: "16px",
    textAlign: "right",
    marginTop: "5px",
    marginRight: "5px",
    marginBottom: "5px",
  } as React.CSSProperties;

  const { page, handlerPageNumber } = usePagination(etapaAtual);

  return (
    <Fragment>
      <div
        className="blog-pagination property-pagination "
        style={stylePageRight}
      >
        <button
          disabled={page?.first}
          onClick={(e) => handlerPageNumber(e, Number(page?.number) - 1)}
        >
          <ImgIcoLeft />
        </button>

        <button>{Number(page?.number) + 1}</button>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          de
        </a>

        <button
          disabled={page?.last}
          onClick={(e) => handlerPageNumber(e, Number(page?.totalPages) - 1)}
        >
          {Number(page?.totalPages)}
        </button>

        <button
          disabled={page?.last}
          onClick={(e) => handlerPageNumber(e, Number(page?.number) + 1)}
        >
          <ImgIcoRight />
        </button>
      </div>
    </Fragment>
  );
};
export default Pagination;
