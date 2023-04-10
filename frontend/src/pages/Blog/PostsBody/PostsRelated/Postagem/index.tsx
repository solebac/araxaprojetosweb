import { BASE_URL } from "../../../../../utils/requests";
import imgSemFoto from "../../../../../assets/img/blog/semFotoCard.png";
import { Link } from "react-router-dom";
import { IArtigoRecents } from "../../../../../interfaces/IArtigoRecents";

type Props = {
  posts: IArtigoRecents;
};
const Postagem = ({ posts }: Props) => {
  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className="related-item">
          <div className="ri-pic">
            <Link
              to={`/hacker/attack/posts/${posts?.url}`}
              className="attack__cabecalho-link"
            >
              <img
                src={
                  posts?.img_card !== ""
                    ? `${BASE_URL}/articles/paint/${posts?.img_card}`
                    : imgSemFoto
                }
                alt=""
                className="img-responsive img-subdestaque img-subdestaque--recents"
              />
            </Link>
          </div>
          <div className="ri-text" style={{ textAlign: "center" }}>
            <h6>{posts.titulo}</h6>
            <span>{new Date(posts.data_publicacao).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Postagem;
