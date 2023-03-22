import { Fragment } from "react";
import { Link } from "react-router-dom";
import imgSemFoto from "../../../../../assets/img/blog/blog-1.jpg";
import { ReactComponent as ImgIcoRight } from "../../../../../assets/img/fonts-icon/arrow_right.svg";
import { Artigo } from "../../../../../types/artigo";
import { BASE_URL } from "../../../../../utils/requests";

type Props = {
  post: Artigo;
};

const DispacheCard = ({ post }: Props) => {
  //recupera o Object
  const autor = post?.autor;
  return (
    <Fragment>
      <div
        className="blog-item large-blog"
        style={{ borderBottom: "1px solid #e1e1e1" }}
      >
        <div className="bi-pic">
          <img
            src={
              post?.imgDestaque !== ""
                ? `${BASE_URL}/articles/paint/${post?.imgDestaque}`
                : imgSemFoto
            }
            className="img-responsive img-destaque"
            alt="Destaque principal"
          />
        </div>
        <div className="bi-text">
          <h4>
            <Link to={`/blog/posts/${post?.url}`}>{post?.titulo}</Link>
          </h4>
          <ul>
            <li>
              by{" "}
              {Object.values(autor).map((values: any, i) => {
                if (i === 1) {
                  return <span key={i}>{values}</span>;
                }
              })}
            </li>
            <li>{new Date(post?.dataPublicacao).toLocaleDateString()}</li>
            <li>{post?.contador} Comentários</li>
          </ul>
          <p className="blog-artigo blog-artigo--limit-line blog-artigo--three-line">
            {post?.conteudoIntroducao}
          </p>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="read-more"
          >
            Leia mais
            <ImgIcoRight />
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default DispacheCard;
