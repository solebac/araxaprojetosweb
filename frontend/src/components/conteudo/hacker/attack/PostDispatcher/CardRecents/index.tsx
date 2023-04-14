import { Link } from "react-router-dom";
import imgSemFoto from "../../../../../../assets/img/blog/semFotoCard.png";
import { IArtigoRecents } from "../../../../../../interfaces/IArtigoRecents";
import { BASE_URL } from "../../../../../../utils/requests";
import "./style.css";

type Props = {
  recents: IArtigoRecents;
  id?: number;
};

const CardRecents = ({ recents, id = 0 }: Props) => {
  return (
    <>
      <article className="card mb-4 mt-4">
        <img
          src={
            recents?.img_card !== ""
              ? `${BASE_URL}/articles/paint/${recents?.img_card}`
              : imgSemFoto
          }
          className="card-img-top img-responsive card-destaque"
          alt=""
        />
        <div className="card-body">
          <p className="card-title card-title--attr artigo--one-line">
            {recents.titulo}
          </p>
          <p className="card-text artigo--limit-line artigo--four-line">
            {recents.conteudo}
          </p>
          <Link
            to={`/blog/posts/${recents?.url}`}
            className="btn btn-outline-dark btn-sm"
          >
            leia mais
          </Link>
        </div>
      </article>
    </>
  );
};
export default CardRecents;
