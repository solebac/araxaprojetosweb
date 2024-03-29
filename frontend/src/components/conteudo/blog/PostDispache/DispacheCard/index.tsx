import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import imgSemFoto from "../../../../../assets/img/blog/blog-1.jpg";
import { ReactComponent as ImgIcoRight } from "../../../../../assets/img/fonts-icon/arrow_right.svg";
import { IArtigo } from "../../../../../interfaces/IArtigo";
import { ResetArtigo } from "../../../../../interfaces/reset";
import { BASE_URL } from "../../../../../utils/requests";

type Props = {
  post: IArtigo;
};

const DispacheCard = ({ post = ResetArtigo }: Props) => {
  //recupera o Object
  //const autor = post?.autor;
  const [postagem, setPostagem] = useState<IArtigo>(post);

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
            <Link to={`/blog/posts/${post?.url}`}>
              {post?.titulo.replaceAll("@", "")}
            </Link>
          </h4>
          <ul>
            <li>
              by{" "}
              {Object.values(postagem.autor).map((values: any, i) => {
                if (i === 1) {
                  return <span key={i}>{values}</span>;
                }
              })}
            </li>
            <li>{new Date(post?.dataPublicacao).toLocaleDateString()}</li>
            <li>{post?.contador} Comentários</li>
          </ul>
          <p className="blog-artigo blog-artigo--limit-line blog-artigo--three-line">
            {post?.conteudoIntroducao.replaceAll("@", "")}
          </p>
          <Link to={`/blog/posts/${post?.url}`} className="read-more">
            Leia mais
            <ImgIcoRight />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
export default DispacheCard;
