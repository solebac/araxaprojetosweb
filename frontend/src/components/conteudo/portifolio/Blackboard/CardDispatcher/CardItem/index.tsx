import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import color from "../../../../../../data/color.json";
import { IArtigo } from "../../../../../../interfaces/IArtigo";
import "./styles.css";

type Props = {
  post: IArtigo;
};
const CardItem = ({ post }: Props) => {
  const navigate = useNavigate();
  function openPost(doc: IArtigo) {
    navigate(`/portifolio/read/${doc.url}`);
  }
  const [tema, setTema] = useState("#98ff00");

  useEffect(() => {
    if (post && Number(post.id) > 0) {
      //console.log("Post.:", post);
      const styles = color.filter(
        (e) => e.ident === post?.slog.slice(0, 1).toLowerCase()
      )[0];
      setTema(styles.cor);
      //console.log("Letra.:", post.slog.slice(0, 1).toLowerCase());
    }
  }, []);

  return (
    <Fragment>
      <article className="portifolio__artigos">
        <div className="row portifolio__around" onClick={() => openPost(post)}>
          <div className="col-md-2 portifolio-reset">
            <div>
              {/**Gerou exception.: style={{ backgroundColor: `${styles.cor}` }} */}
              <p
                className="portifolio__slog portifolio__slog--tipografia"
                style={{ backgroundColor: `${tema}` }}
              >
                {post.slog}
              </p>
            </div>
          </div>
          <div className="col-md-10">
            <div className="portifolio_box">
              <p className="portifolio__data">
                {new Date(post.dataPublicacao).toLocaleDateString()} - 4 min de
                leitura
              </p>
              <Link to="#">
                <p className="portifolio__titulo">{post.titulo}</p>
              </Link>
              <p className="portifolio__subtitulo portifolio__subtitulo--hidden">
                {/**attack__text--limit-line attack__text--two-line */}
                {post.conteudoIntroducao.replaceAll("@", "")}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
};
export default CardItem;
