import { Fragment } from "react";
import { Link } from "react-router-dom";
import imgSemFoto from "../../../../../../assets/img/blog/semFotoCard.png";
import { Artigo } from "../../../../../../types/artigo";
import { BASE_URL } from "../../../../../../utils/requests";

type Props = {
  post: Artigo;
};

const CardDispatcher = ({ post }: Props) => {
  return (
    <Fragment>
      <article className="col-md-6">
        <div className="card card--moldura mb-1">
          {/*<ImgFluxion
            className="card-img-top card-img-top--cofre"
            aria-label=""
          />*/}
          <img
            src={
              post?.imgDestaque !== ""
                ? `${BASE_URL}/articles/paint/quarentena/${post?.imgDestaque}`
                : imgSemFoto
            }
            alt=""
            className="card-img-top card-img-top--cofre"
          />

          <div className="card-body">
            <p className="card-title">{post.titulo}</p>
            <p className="card-text card-text--limitd">
              {post.conteudoIntroducao.replaceAll("@", "")}
            </p>
            <Link
              to={`/hacker/attack/posts/${post?.url}`}
              className="btn btn-outline-dark btn-sm"
            >
              Leia o Resumo
            </Link>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default CardDispatcher;
