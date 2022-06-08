import * as React from "react";
import "../../assets/css/hacker.css";
import { ReactComponent as ImgCapa } from "../../assets/img/navs/banner-01.svg";
import { ReactComponent as ImgIcoHome } from "../../assets/img/navs/home_mini.svg";
import { ReactComponent as ImgIcoNext } from "../../assets/img/fonts-icon/next_mini.svg";
import Navbar from "../../components/Navbar";

const BannerHacker = () => {
  return (
    <header>
      <Navbar />
      <section className="principal-page">
        <div className="principal-page__logo">
          <ImgCapa className="img-responsive" aria-label="Mundo Hacker" />
        </div>
        <div className="container principal-page__text">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h4>Blog</h4>
                <div className="bt-option">
                  <a href="./index.html">
                    <ImgIcoHome aria-label="Home" /> Home
                  </a>
                  <span>
                    <ImgIcoNext aria-label="Proximo" />
                    Blog
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
export default BannerHacker;
