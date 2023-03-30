import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Artigo } from "../../../../../../types/artigo";

type Props = {
  post: Artigo;
};
const CardItem = ({ post }: Props) => {
  return (
    <Fragment>
      <article className="portifolio__artigos">
        <div className="row portifolio__around">
          <div className="col-md-2 portifolio-reset">
            <Link to="#">
              <p className="portifolio__slog portifolio__slog--tipografia">
                {post.slog}
              </p>
            </Link>
          </div>
          <div className="col-md-10">
            <div className="portifolio_box">
              <p className="portifolio__data">
                {new Date(post.dataPublicacao).toLocaleDateString()} - 4 min de
                leitura
              </p>
              <Link to="#">
                <p className="portifolio__titulo">{post.titulo}</p>
              </Link>
              <p className="portifolio__subtitulo portifolio__subtitulo--hidden">
                {/**attack__text--limit-line attack__text--two-line */}
                {post.conteudoIntroducao.replaceAll("@", "")}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
};
export default CardItem;
