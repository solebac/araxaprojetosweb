import React from "react";
import imgMainDestaque from "../../../../assets/img/blog/blog-1.jpg";
import imgTest01 from "../../../../assets/img/blog/panel-test.jpg";
import imgTest02 from "../../../../assets/img/blog/samples/blog-3.jpg";
import imgTest03 from "../../../../assets/img/blog/samples/blog-4.jpg";
import imgTest04 from "../../../../assets/img/blog/samples/blog-5.jpg";
import { ReactComponent as ImgIcoRight } from "../../../../assets/img/fonts-icon/arrow_right.svg";

const PostDispache = () => {
  return (
    <>
      <div className="col-lg-8">
        <div className="blog-item-list">
          <div className="blog-item large-blog">
            <div className="bi-pic">
              <img
                src={imgMainDestaque}
                className="img-responsive img-destaque"
                alt="Destaque principal"
              />
            </div>
            <div className="bi-text">
              <h4>
                <a href="./blog-details.html">
                  what3words: The app changing real estate and construction
                  forever
                </a>
              </h4>
              <ul>
                <li>
                  by <span>Jonathan Doe</span>
                </li>
                <li>Seb 24, 2019</li>
                <li>12 Comment</li>
              </ul>
              <p className="blog-artigo">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book sentially
                unchanged...
              </p>
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="read-more"
              >
                Read more
                <ImgIcoRight />
              </a>
            </div>
          </div>

          {/** BEGIN DIV POST-PUBLICAÇÃO */}
          <article className="blog-item">
            
            <div className="bi-pic">
              <img
                src={imgTest01}
                className="img-responsive img-subdestaque"
                alt=""
              />
            </div>
            
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  Flavio: The app changing real estate and construction forever
                </a>
              </h5>
              <ul>
                <li>
                  by <span>Jonathan Doe</span>
                </li>
                <li>Seb 24, 2019</li>
                <li>12 Comment</li>
              </ul>
              <p className="blog-artigo">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknown...
              </p>
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="read-more"
              >
                Read more <ImgIcoRight />
              </a>
            </div>

          </article>
          {/** END DIV POST-PUBLICAÇÃO */}

          <div className="blog-item">
            <div className="bi-pic">
              <img
                src={imgTest02}
                className="img-responsive img-subdestaque"
                alt=""
              />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  what3words: The app changing real estate and construction
                  forever
                </a>
              </h5>
              <ul>
                <li>
                  by <span>Jonathan Doe</span>
                </li>
                <li>Seb 24, 2019</li>
                <li>12 Comment</li>
              </ul>
              <p className="blog-artigo">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknown...
              </p>
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="read-more"
              >
                Read more <ImgIcoRight />
              </a>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img
                src={imgTest03}
                className="img-responsive img-subdestaque"
                alt=""
              />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  what3words: The app changing real estate and construction
                  forever
                </a>
              </h5>
              <ul>
                <li>
                  by <span>Jonathan Doe</span>
                </li>
                <li>Seb 24, 2019</li>
                <li>12 Comment</li>
              </ul>
              <p className="blog-artigo">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknown...
              </p>
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="read-more"
              >
                Read more <ImgIcoRight />
              </a>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img
                src={imgTest04}
                className="img-responsive img-subdestaque"
                alt=""
              />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  what3words: The app changing real estate and construction
                  forever
                </a>
              </h5>
              <ul>
                <li>
                  by <span>Jonathan Doe</span>
                </li>
                <li>Seb 24, 2019</li>
                <li>12 Comment</li>
              </ul>
              <p className="blog-artigo">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknown...
              </p>
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="read-more"
              >
                Read more <ImgIcoRight />
              </a>
            </div>
          </div>
        </div>
        <div className="blog-pagination property-pagination ">
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            1
          </a>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            2
          </a>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            3
          </a>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <ImgIcoRight />
          </a>
        </div>
      </div>
    </>
  );
};
export default PostDispache;