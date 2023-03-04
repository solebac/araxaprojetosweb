import React from "react";
import {ReactComponent as ImgInstragram} from "../../../../assets/img/redes/instagram.svg";
import {ReactComponent as ImgTwitter} from "../../../../assets/img/redes/twitter.svg";
import {ReactComponent as ImgYoutube} from "../../../../assets/img/redes/youtube.svg";
import {ReactComponent as ImgFacebook} from "../../../../assets/img/redes/facebook.svg";
import imgTest01 from "../../../../assets/img/blog/samples/rp-1.jpg";
import imgTest02 from "../../../../assets/img/blog/samples/rp-2.jpg";
import imgTest03 from "../../../../assets/img/blog/samples/rp-3.jpg";
import imgTest04 from "../../../../assets/img/blog/samples/rp-4.jpg";

const PostRecent = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="blog-sidebar">
          <div className="follow-us">
            <div className="section-title sidebar-title-b">
              <h6>Follow us</h6>
            </div>
            <div className="fu-links">
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <ImgFacebook aria-label="Facebook" />
              </a>
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label="Twitter"
                className="twitter"
              >
                <ImgTwitter />
              </a>
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label="Youtuber"
                className="youtube"
              >
                <ImgYoutube />
              </a>
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label="Instagram"
                className="instagram"
              >
                <ImgInstragram />
              </a>
            </div>
          </div>

          <div className="feature-post">
            <div className="section-title sidebar-title-b">
              <h6>Feature posts</h6>
            </div>
            <div className="recent-post">
              
              {/** BEGIN DIV POST-PUBLICAÇÃO-RECENTE */}
              <article className="rp-item">
                <div className="rp-pic">
                  <img src={imgTest01} alt="" />
                </div>
                <div className="rp-text">
                  <h6>
                    <a href="/#" onClick={(e)=>{e.preventDefault()}}>
                      Vancouver real estate advisurges conference goers...
                    </a>
                  </h6>
                  <span>Seb 24, 2019</span>
                </div>
              </article>
              {/** END DIV POST-PUBLICAÇÃO-RECENTE */}

              <div className="rp-item">
                <div className="rp-pic">
                  <img src={imgTest02} alt="" />
                </div>
                <div className="rp-text">
                  <h6>
                    <a href="/#" onClick={(e)=>{e.preventDefault()}}>
                      Vancouver real estate advisurges conference goers...
                    </a>
                  </h6>
                  <span>Seb 24, 2019</span>
                </div>
              </div>
              <div className="rp-item">
                <div className="rp-pic">
                  <img src={imgTest03} alt="" />
                </div>
                <div className="rp-text">
                  <h6>
                    <a href="/#" onClick={(e)=>{e.preventDefault()}}>
                      Vancouver real estate advisurges conference goers...
                    </a>
                  </h6>
                  <span>Seb 24, 2019</span>
                </div>
              </div>
              <div className="rp-item">
                <div className="rp-pic">
                  <img src={imgTest04} alt="" />
                </div>
                <div className="rp-text">
                  <h6>
                    <a href="/#" onClick={(e)=>{e.preventDefault()}}>
                      Vancouver real estate advisurges conference goers...
                    </a>
                  </h6>
                  <span>Seb 24, 2019</span>
                </div>
              </div>
            </div>
          </div>
          <div className="subscribe-form">
            <div className="section-title sidebar-title-b">
              <h6>Subscribe</h6>
            </div>
            <p className="blog-artigo">
              Consectetur adipiscing elit, sed do eiusmod ut labore.
            </p>
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit" className="site-btn">
                Subscribe
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
            frameBorder="0" allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default PostRecent;
