import * as React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { ReactComponent as ImgAmazon } from "../../../../assets/img/carousel/amazon_aws-ar21.svg";
import { ReactComponent as ImgAxios } from "../../../../assets/img/carousel/axios-ar21.svg";
import { ReactComponent as ImgGithub } from "../../../../assets/img/carousel/github-ar21.svg";
import { ReactComponent as ImgHeroku } from "../../../../assets/img/carousel/heroku-ar21.svg";
import { ReactComponent as ImgJava } from "../../../../assets/img/carousel/java-ar21.svg";
import { ReactComponent as ImgJavascrip } from "../../../../assets/img/carousel/javascript-ar21.svg";
import { ReactComponent as ImgKali } from "../../../../assets/img/carousel/kali.svg";
import { ReactComponent as ImgMySql } from "../../../../assets/img/carousel/mysql-ar21.svg";
import { ReactComponent as ImgNetlily } from "../../../../assets/img/carousel/netlify-ar21.svg";
import { ReactComponent as ImgNexts } from "../../../../assets/img/carousel/nextjs.svg";
import { ReactComponent as ImgPostGreSql } from "../../../../assets/img/carousel/postgresql-ar21.svg";
import { ReactComponent as ImgReactjs } from "../../../../assets/img/carousel/reactjs-ar21.svg";

const Technology = () => {
  const obj = {
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };
  return (
    <>
      <section id="marketing">
        <div className="logo-carousel">
          <div className="container">
            <h2>Tecnologias Aplicadas</h2>
            <div className="tecnology-carousel">
              <ReactOwlCarousel
                items={6}
                className="owl-theme"
                loop
                margin={100}
                responsiveClass={true}
                autoplay={true}
                responsive={obj.responsive}
              >
                <a
                  href="https://axios-http.com/docs/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgAxios aria-label="" />
                  </div>
                </a>

                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgNetlily aria-label="" />
                  </div>
                </a>

                <a
                  href="https://pt-br.reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgReactjs aria-label="" />
                  </div>
                </a>

                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgNexts aria-label="" />
                  </div>
                </a>

                <a
                  href="https://www.kali.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgKali aria-label="" />
                  </div>
                </a>

                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgHeroku aria-label="" />
                  </div>
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgGithub aria-label="" />
                  </div>
                </a>

                <a
                  href="https://www.mysql.com/downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgMySql aria-label="" />
                  </div>
                </a>

                <a
                  href="https://www.postgresql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgPostGreSql aria-label="" />
                  </div>
                </a>

                <a
                  href="https://aws.amazon.com/pt/console/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgAmazon aria-label="" />
                  </div>
                </a>

                <a
                  href="https://docs.oracle.com/en/java/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgJava aria-label="" />
                  </div>
                </a>

                <a
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgJavascrip aria-label="" />
                  </div>
                </a>
              </ReactOwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Technology;
