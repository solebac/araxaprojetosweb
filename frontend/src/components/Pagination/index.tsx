import { Fragment } from "react";
import { ReactComponent as ImgIcoRight } from "../../assets/img/fonts-icon/arrow_right-pag.svg";
import { ReactComponent as ImgIcoLeft } from "../../assets/img/fonts-icon/arrow_left-pag.svg";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { IArtigo } from "../../interfaces/IArtigo";
import { IAutor } from "../../interfaces/IAutor";
import { ICategoria } from "../../interfaces/ICategoria";

type Props = {
  page:
    | IPaginacao<IArtigo>
    | IPaginacao<IAutor>
    | IPaginacao<ICategoria>
    | undefined;
  onChange: Function;
};

const Pagination = ({ page, onChange }: Props) => {
  const stylePageRight = {
    lineHeight: "16px",
    textAlign: "right",
    marginTop: "5px",
    marginRight: "5px",
    marginBottom: "5px",
  } as React.CSSProperties;
  return (
    <Fragment>
      <div
        className="blog-pagination property-pagination "
        style={stylePageRight}
      >
        <button
          disabled={page?.first}
          onClick={() => onChange(Number(page?.number) - 1)}
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
          onClick={() => onChange(Number(page?.totalPages) - 1)}
        >
          {Number(page?.totalPages)}
        </button>

        <button
          disabled={page?.last}
          onClick={() => onChange(Number(page?.number) + 1)}
        >
          <ImgIcoRight />
        </button>
      </div>
    </Fragment>
  );
};
export default Pagination;
