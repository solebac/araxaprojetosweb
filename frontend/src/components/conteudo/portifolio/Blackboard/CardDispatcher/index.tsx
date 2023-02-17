import React, { Fragment } from "react";
import { Artigo } from "../../../../../types/artigo";

type Props = {
  post: Artigo;
};

const CardDispatcher = ({ post }: Props) => {
  return (
    <Fragment>
      <article className="portifolio__artigos">
        <div className="row portifolio__around">
          <div className="col-md-2 portifolio-reset">
            <p className="portifolio__slog">{post.slog}</p>
          </div>
          <div className="col-md-10">
            <div className="portifolio_box">
              <p className="portifolio__data">
                {post.dataPublicacao} - 4 min de leitura
              </p>
              <p className="portifolio__titulo">{post.titulo}</p>
              <p className="portifolio__subtitulo attack__text--limit-line attack__text--two-line">
                {post.conteudoIntroducao}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default CardDispatcher;
