import { Fragment } from "react";
import imgMainDestaque from "../../../../../assets/img/blog/blog-1.jpg";
import { ReactComponent as ImgIcoRight } from "../../../../../assets/img/fonts-icon/arrow_right.svg";
import { Artigo } from "../../../../../types/artigo";

type Props = {
  post: Artigo;
};

const DispacheCard = ({ post }: Props) => {
  //recupera o Object
  const autor = post.autor;
  return (
    <Fragment>
      <div className="blog-item large-blog">
        <div className="bi-pic">
          <img
            src={imgMainDestaque}
            className="img-responsive img-destaque"
            alt="Destaque principal"
          />
        </div>
        <div className="bi-text">
          <h4>
            <a href="./blog-details.html">{post.titulo}</a>
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
            <li>{post.dataPublicacao}</li>
            <li>{post.contador} ComentÃ¡rios</li>
          </ul>
          <p className="blog-artigo blog-artigo--limit-line blog-artigo--three-line">
            {post.conteudoIntroducao}
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
