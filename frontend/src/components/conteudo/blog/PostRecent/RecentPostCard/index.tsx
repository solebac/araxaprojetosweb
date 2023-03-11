import React from "react";
import { Link } from "react-router-dom";
/*import imgTest01 from "../../../../../assets/img/blog/panel-test.jpg";*/
import imgSemFoto from "../../../../../assets/img/blog/semFotoCard.png";
import { ArtigoRecents } from "../../../../../types/artigo";
import { BASE_URL } from "../../../../../utils/requests";

type Props = {
  post: ArtigoRecents;
};

const RecentPostCard = ({ post }: Props) => {
  return (
    <>
      <article className="rp-item">
        <div className="rp-pic">
          <img
            className="img-responsive img-cardrecents"
            src={
              post?.img_card !== ""
                ? `${BASE_URL}/articles/paint/${post?.img_card}`
                : imgSemFoto
            }
            alt=""
          />
        </div>
        <div className="rp-text">
          <h6>
            <Link
              to={`/blog/posts/${post?.slog}`}
              className="blog-artigo--limit-line blog-artigo--two-line"
            >
              {post.titulo}
            </Link>
          </h6>
          <span className="blog-recents">
            {new Date(post.data_publicacao).toLocaleDateString()}
          </span>
        </div>
      </article>
    </>
  );
};
export default RecentPostCard;
