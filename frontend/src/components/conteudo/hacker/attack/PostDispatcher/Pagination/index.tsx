import React, { Fragment } from "react";
import { ReactComponent as ImgIcoRight } from "../../../../../../assets/img/fonts-icon/arrow_right-pag.svg";
import { ReactComponent as ImgIcoLeft } from "../../../../../../assets/img/fonts-icon/arrow_left-pag.svg";
import { ArtigoPage } from "../../../../../../types/artigo";

type Props = {
  page: ArtigoPage;
  onChange: Function;
};

const Pagination = ({ page, onChange }: Props) => {
  return (
    <Fragment>
      <div className="blog-pagination property-pagination ">
        <button disabled={page.first} onClick={() => onChange(page.number - 1)}>
          <ImgIcoLeft />
        </button>

        <button>{page.number + 1}</button>

        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          de
        </a>

        <button
          disabled={page.last}
          onClick={() => onChange(page.totalPages - 1)}
        >
          {page.totalPages}
        </button>

        <button disabled={page.last} onClick={() => onChange(page.number + 1)}>
          <ImgIcoRight />
        </button>
      </div>
    </Fragment>
  );
};
export default Pagination;
