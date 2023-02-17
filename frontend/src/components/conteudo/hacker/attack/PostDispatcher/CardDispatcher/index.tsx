import React from "react";
import imgTest01 from "../../../../../../assets/img/blog/blog-1.jpg";
import { ReactComponent as ImgIcoRight } from "../../../../../../assets/img/fonts-icon/arrow_right.svg";
import { Artigo } from "../../../../../../types/artigo";

type Props = {
  post: Artigo;
};

const Dispatche = ({ post }: Props) => {
  return (
    <>
      <article className="attack__cabecalho">
        <a href="attack-details.html" className="attack__cabecalho-link">
          <img
            src={imgTest01}
            className="img-responsive img_principal"
            alt=""
          />
        </a>
        <p className="attack__titulo attack__text--limit-line attack__text--two-line">
          {post.titulo}
        </p>
        <p className="attack__text attack__text--limit-line attack__text--three-line">
          {post.conteudoIntroducao}
        </p>
        <p>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="attack__read-more"
          >
            Leia mais
            <ImgIcoRight />
          </a>
        </p>
      </article>
    </>
  );
};
export default Dispatche;
