import { ReactComponent as ImgInstragram } from "../../../../assets/img/redes/instagram.svg";
import { ReactComponent as ImgTwitter } from "../../../../assets/img/redes/twitter.svg";
import { ReactComponent as ImgYoutube } from "../../../../assets/img/redes/youtube.svg";
import { ReactComponent as ImgFacebook } from "../../../../assets/img/redes/facebook.svg";
import RecentPostCard from "./RecentPostCard";
import { Link } from "react-router-dom";
import { IArtigoRecents } from "../../../../interfaces/IArtigoRecents";
import useContextRenderBlogPostRecents from "../../../../state/hooks/useContextRenderBlogPostRecents";

const PostRecent = () => {
  const newPosts: IArtigoRecents[] = useContextRenderBlogPostRecents(2);
  return (
    <>
      <div className="col-lg-4">
        <div className="blog-sidebar">
          <div className="follow-us">
            <div className="section-title sidebar-title-b">
              <h6>Siga-nos</h6>
            </div>

            <div className="fu-links">
              <Link
                to="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <ImgFacebook aria-label="Facebook" />
              </Link>
              <Link
                to="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label="Twitter"
                className="twitter"
              >
                <ImgTwitter />
              </Link>
              <Link
                to="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label="Youtuber"
                className="youtube"
              >
                <ImgYoutube />
              </Link>
              <Link
                to="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label="Instagram"
                className="instagram"
              >
                <ImgInstragram />
              </Link>
            </div>
          </div>

          <div className="feature-post">
            <div className="section-title sidebar-title-b">
              <h6>Posts recentes</h6>
            </div>
            <div className="recent-post">
              {/** BEGIN DIV POST-PUBLICAÇÃO-RECENTE */}
              {/** MAXIMO DE POSTAGENS 5 POST'S */}
              {newPosts?.map((item: IArtigoRecents) => {
                return <RecentPostCard key={item.id} post={item} />;
              })}

              {/** END DIV POST-PUBLICAÇÃO-RECENTE */}
            </div>
          </div>

          <div className="subscribe-form">
            <div className="section-title sidebar-title-b">
              <h6>Inscrever-se</h6>
            </div>
            <p className="blog-artigo">Novidades e Lançamentos</p>
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit" className="site-btn">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="blog__banner">
          <iframe
            title="Teste a velocidade da Internet"
            width="100%"
            height="250"
            src="https://fast.com/pt"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default PostRecent;
