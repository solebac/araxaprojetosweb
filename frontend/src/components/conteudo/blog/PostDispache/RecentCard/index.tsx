import React, { Fragment } from "react";
import imgTest01 from "../../../../../assets/img/blog/panel-test.jpg";
import { ReactComponent as ImgIcoRight } from "../../../../../assets/img/fonts-icon/arrow_right.svg";
import { Artigo } from "../../../../../types/artigo";

type Props = {
  post: Artigo;
};

const RecentCard = ({ post }: Props) => {
  const autor = post.autor;

  return (
    <Fragment>
      <article className="blog-item">
        <div className="bi-pic">
          <img
            src={imgTest01}
            className="img-responsive img-subdestaque"
            alt=""
          />
        </div>

        <div className="bi-text">
          <h5>
            <a href="./blog-details.html">{post.titulo}</a>
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
            <li>{post.dataPublicacao}</li>
            <li>{`${post.contador} Comment`}</li>
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
            Leia mais <ImgIcoRight />
          </a>
        </div>
      </article>
    </Fragment>
  );
};
export default RecentCard;
