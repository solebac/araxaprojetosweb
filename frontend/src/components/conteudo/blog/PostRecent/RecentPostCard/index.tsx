import React from "react";
/*import imgTest01 from "../../../../../assets/img/blog/panel-test.jpg";*/
import imgTest01 from "../../../../../assets/img/blog/samples/rp-1.jpg";
import { ArtigoRecents } from "../../../../../types/artigo";

type Props = {
  post: ArtigoRecents;
};

const RecentPostCard = ({ post }: Props) => {
  return (
    <>
      <article className="rp-item">
        <div className="rp-pic">
          <img src={imgTest01} alt="" />
        </div>
        <div className="rp-text">
          <h6>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="blog-artigo--limit-line blog-artigo--two-line"
            >
              {post.titulo}
            </a>
          </h6>
          <span>{post.data_publicacao}</span>
        </div>
      </article>
    </>
  );
};
export default RecentPostCard;
