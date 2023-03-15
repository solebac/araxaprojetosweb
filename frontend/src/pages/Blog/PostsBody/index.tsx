import { Link } from "react-router-dom";
import imgTest from "../../../assets/img/blog/samples/bd-pic.jpg";
import { Artigo, ArtigoRecents } from "../../../types/artigo";
import PostsRelated from "./PostsRelated";
type Props = {
  artigo: Artigo;
  recents: ArtigoRecents[];
};
const PostsBody = ({ artigo, recents }: Props) => {
  const myArray = artigo.conteudoParagrafoOne.split(".");
  console.log(myArray);
  return (
    <>
      <section className="blog-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto--center">
              <div className="blog-details-content blog-details-content--tipografia">
                <div className="bc-top">
                  <p className="blog">{artigo.conteudoIntroducao}</p>
                </div>
                <div className="bc-details">
                  <div className="bc-text">
                    <img src={imgTest} alt="" className="bc-pic" />
                    <p className="blog">{artigo.conteudoParagrafoOne}</p>
                  </div>
                </div>
                <div className="bc-desc">
                  <p className="blog">{artigo.conteudoParagrafoTwo}</p>
                </div>
                <div className="bc-quote">
                  <div className="bq-icon">
                    <i className="fa fa-quote-left"></i>
                  </div>
                  <div className="bq-text">
                    <p className="blog">
                      Consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="bc-desc-last">
                  <p className="blog">{artigo.conteudoConclusao}</p>
                </div>
                <div className="bc-tags">
                  <Link to="#">Tecnológia</Link>
                  <Link to="#">IoT</Link>
                  <Link to="#">Oportunidade</Link>
                  <Link to="#">OpenGpt</Link>
                </div>
                <div className="bc-related-post">
                  <a href="#" className="previous-post">
                    <i className="fa fa-angle-left"></i> Previous posts
                  </a>
                  <a href="#" className="next-post">
                    Next posts <i className="fa fa-angle-right"></i>
                  </a>
                </div>
                {/**Begin Posts Relacionados*/}
                {/**<PostsRelated /> - Em desenvolvimento*/}
                <PostsRelated recents={recents} />
                {/**End Posts Relacionados */}

                {/**Begin Posts Comentários*/}
                {/**<PostsCommets /> - Em desenvolvimento*/}
                {/**End Posts Comentários */}

                {/**Begin Posts Send Comentários*/}
                {/**<PostsSendCommets /> - Em desenvolvimento*/}
                {/**End Posts Send Comentários */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PostsBody;
