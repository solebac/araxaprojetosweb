import React from "react";
import { Link } from "react-router-dom";
import imgTest01 from "../../../../assets/img/blog/panel-test.jpg";
import { ReactComponent as ImgIcoRight } from "../../../../assets/img/fonts-icon/arrow_right.svg";

const PostCard = () => {
  return (
    <>
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
            <Link to="./blog-details.html">
              Flavio: The app changing real estate and construction forever
            </Link>
          </h5>
          <ul>
            <li>
              by <span>Jonathan Doe</span>
            </li>
            <li>Seb 24, 2019</li>
            <li>12 Comment</li>
          </ul>
          <p className="blog-artigo">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown...
          </p>
          <Link
            to="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="read-more"
          >
            Read more <ImgIcoRight />
          </Link>
        </div>
      </article>
    </>
  );
};
export default PostCard;
