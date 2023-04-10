import { Fragment } from "react";
import { Link } from "react-router-dom";
import imgSemFoto from "../../../../../assets/img/blog/semFotoCard.png";
import { ReactComponent as ImgIcoRight } from "../../../../../assets/img/fonts-icon/arrow_right.svg";
import { IArtigo } from "../../../../../interfaces/IArtigo";
import { BASE_URL } from "../../../../../utils/requests";

type Props = {
  post: IArtigo;
};

const RecentCard = ({ post }: Props) => {
  const autor = post.autor;
  return (
    <Fragment>
      <article className="blog-item">
        <div className="bi-pic">
          <img
            src={
              post?.imgCard !== ""
                ? `${BASE_URL}/articles/paint/${post?.imgCard}`
                : imgSemFoto
            }
            className="img-responsive img-subdestaque"
            alt=""
          />
        </div>

        <div className="bi-text">
          <h5>
            <Link
              to={`/blog/posts/${post?.url}`}
              className="blog-artigo--limit-line blog-artigo--one-line blog-artigo--attr"
            >
              {post.titulo.replaceAll("@", "")}
            </Link>
          </h5>
          <ul>
            <li>
              by{" "}
              {Object.values(autor).map((values: any, i: number) => {
                if (i === 1) {
                  return <span key={i}>{values}</span>;
                }
              })}
            </li>
            <li>{new Date(post.dataPublicacao).toLocaleDateString()}</li>
            <li>{`${post.contador} Comment`}</li>
          </ul>
          <p className="blog-artigo blog-artigo--limit-line blog-artigo--three-line">
            {post.conteudoIntroducao.replaceAll("@", "")}
          </p>
          <Link to={`/blog/posts/${post?.url}`} className="read-more">
            Leia mais
            <ImgIcoRight />
          </Link>
        </div>
      </article>
    </Fragment>
  );
};
export default RecentCard;
