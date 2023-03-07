import React, { Fragment } from "react";
import { ReactComponent as ImgFluxion } from "../../../../../../assets/img/card/fluxion.svg";
import { Artigo } from "../../../../../../types/artigo";

type Props = {
  post: Artigo;
};

const CardDispatcher = ({ post }: Props) => {
  return (
    <Fragment>
      <article className="col-md-12">
        <div className="card card--moldura mb-1">
          <ImgFluxion
            className="card-img-top card-img-top--cofre"
            aria-label=""
          />
          <div className="card-body">
            <p className="card-title">{post.titulo}</p>
            <p className="card-text card-text--limitd">
              {post.conteudoIntroducao}
            </p>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-outline-dark btn-sm"
            >
              Leia o Resumo
            </a>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default CardDispatcher;
