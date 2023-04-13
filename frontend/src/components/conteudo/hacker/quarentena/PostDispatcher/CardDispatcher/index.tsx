import { Fragment } from "react";
import { Link } from "react-router-dom";
import imgSemFoto from "../../../../../../assets/img/blog/semFotoCard.png";
import { IArtigo } from "../../../../../../interfaces/IArtigo";
import { requestsFile } from "../../../../../../utils/files";
import { BASE_URL } from "../../../../../../utils/requests";
import "./style.css";

type Props = {
  post: IArtigo;
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
            alt={post?.titulo}
            className="card-img-top card-img-top--cofre"
          />

          <div className="card-body">
            <p className="card-title">{post.titulo}</p>
            <p className="card-text card-text--limitd">
              {post.conteudoIntroducao.replaceAll("@", "")}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Link
                style={{ display: "flex" }}
                to={`/hacker/attack/posts/${post?.url}`}
                className="btn btn-outline-dark btn-sm"
              >
                Leia o Resumo
              </Link>
              <button
                style={{ display: "flex" }}
                className="btn btn-outline-dark btn-sm dangers"
                onClick={() => requestsFile(post?.imgCard)}
              >
                <span className="dangers__titulo">Download</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default CardDispatcher;
