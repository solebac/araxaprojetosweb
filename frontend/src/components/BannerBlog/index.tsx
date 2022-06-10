import * as React from "react";
import { ReactComponent as ImgCapa } from "../../assets/img/navs/banner-04.svg";
import { ReactComponent as ImgIcoHome } from "../../assets/img/navs/home_mini.svg";
import { ReactComponent as ImgIcoNext } from "../../assets/img/fonts-icon/next_mini.svg";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const BannerBlog = () => {
  return (
    <header>
      <Navbar />
      <section className="principal-page">
        <div className="principal-page__logo">
          <ImgCapa className="img-responsive principal-page__logo--resize" aria-label="Blog" />
        </div>
        <div className="container principal-page__text">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h4>Blog</h4>
                <div className="bt-option breadcrumb-text--line">
                  <Link to="/" className="breadcrumb-text--line">
                    <ImgIcoHome aria-label="Home" />
                    <span className="ml-4">Home</span>
                  </Link>
                  <span className="breadcrumb-text--line">
                    <ImgIcoNext aria-label="Proximo" /> <span>Blog</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
export default BannerBlog;
