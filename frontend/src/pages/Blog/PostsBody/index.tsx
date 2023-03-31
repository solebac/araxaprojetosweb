import { Link } from "react-router-dom";
import imgTest from "../../../assets/img/blog/samples/bd-pic.jpg";
import { Artigo, ArtigoRecents } from "../../../types/artigo";
import { clearArroba } from "../../../utils/tools";
import Paragrafos from "./Paragrafos";
import PostsRelated from "./PostsRelated";
type Props = {
  artigo: Artigo;
  recents: ArtigoRecents[];
  url?: string[];
};
const PostsBody = ({ artigo, recents, url = [] }: Props) => {
  const myArray = clearArroba(artigo);
  const qkey = Object.values(artigo.categorias)[0];
  return (
    <>
      <section className="blog-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto--center">
              <div className="blog-details-content blog-details-content--tipografia">
                {myArray.map((text, index) => {
                  const bcTop = "bc-top";
                  const bcDesc = "bc-desc";
                  return !(index === 2) ? (
                    <Paragrafos
                      texto={text}
                      style={bcTop}
                      paths={imgTest}
                      imgs={false}
                      key={index}
                    />
                  ) : (
                    <Paragrafos
                      texto={text}
                      style={bcDesc}
                      paths={artigo.imgDestaque}
                      imgs={true}
                      key={index}
                      quarentena={Number(qkey)}
                    />
                  );
                })}

                <div
                  className="col-md-12 mt-1 bc-tags"
                  style={{ background: "#fff", float: "none" }}
                >
                  <ul className="chec-radio">
                    <li className="pz">
                      <label className="radio-inline">
                        <input
                          type="checkbox"
                          id="pro-chx-residential"
                          name="gas_availability"
                          className="pro-chx"
                          value="yes"
                          checked
                        />
                        <div className="clab">Tecnológia</div>
                      </label>
                    </li>
                    <li className="pz">
                      <label className="radio-inline">
                        <input
                          type="checkbox"
                          id="pro-chx-residential"
                          name="electricity_availability"
                          className="pro-chx"
                          value="yes"
                        />
                        <div className="clab">IoT</div>
                      </label>
                    </li>
                    <li className="pz">
                      <label className="radio-inline">
                        <input
                          type="checkbox"
                          id="pro-chx-residential"
                          name="phone_internet"
                          className="pro-chx"
                          value="yes"
                        />
                        <div className="clab">Oportunidade</div>
                      </label>
                    </li>
                    <li className="pz">
                      <label className="radio-inline">
                        <input
                          type="checkbox"
                          id="pro-chx-residential"
                          name="water_availability"
                          className="pro-chx"
                          value="yes"
                        />
                        <div className="clab">OpenGpt</div>
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="bc-related-post">
                  <Link
                    to={url.length > 0 ? `/hacker/attack/posts/${url[0]}` : "#"}
                    className="previous-post"
                  >
                    <i className="fa fa-angle-left"></i> postagens anteriores
                  </Link>
                  <Link
                    to={url.length > 1 ? `/hacker/attack/posts/${url[1]}` : "#"}
                    className="next-post"
                  >
                    Próximas postagens <i className="fa fa-angle-right"></i>
                  </Link>
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
