import { Link } from "react-router-dom";
import imgSemFoto from "../../../../../../assets/img/blog/blog-1.jpg";
import { ReactComponent as ImgIcoRight } from "../../../../../../assets/img/fonts-icon/arrow_right.svg";
import { IArtigo } from "../../../../../../interfaces/IArtigo";
import { BASE_URL } from "../../../../../../utils/requests";

type Props = {
  post: IArtigo;
};

const Dispatche = ({ post }: Props) => {
  return (
    <>
      <article className="attack__cabecalho">
        <Link
          to={`/hacker/attack/posts/${post?.url}`}
          className="attack__cabecalho-link"
        >
          <img
            src={
              post?.imgDestaque !== ""
                ? `${BASE_URL}/articles/paint/${post?.imgDestaque}`
                : imgSemFoto
            }
            className="img-responsive img_principal"
            alt=""
          />
        </Link>
        <p className="attack__titulo attack__text--limit-line attack__text--two-line">
          {post.titulo}
        </p>
        <p className="attack__text attack__text--limit-line attack__text--three-line">
          {post.conteudoIntroducao.replaceAll("@", "")}
        </p>
        <p>
          <Link
            to={`/hacker/attack/posts/${post?.url}`}
            className="attack__read-more"
          >
            Leia mais
            <ImgIcoRight />
          </Link>
        </p>
      </article>
    </>
  );
};
export default Dispatche;
