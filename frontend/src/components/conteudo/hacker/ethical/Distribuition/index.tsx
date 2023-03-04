import React from "react";
import ImgBackbox from "../../../../../assets/img/offensive/Backbox.png";
import { ReactComponent as ImgKali } from "../../../../../assets/img/carousel/kali.svg";
import ImgBlackarch from "../../../../../assets/img/offensive/BlackArch.png";
import ImgParrot from "../../../../../assets/img/offensive/Parrot.png";
import ImgPentoo from "../../../../../assets/img/offensive/pentoo.png";
import ImgMetasploit from "../../../../../assets/img/offensive/metasploit.png";
import ReactOwlCarousel from "react-owl-carousel";

const Distribuition = () => {
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
    },
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="titulo-portifolio mb-1">
                Distribuição para Intrusão e Hacking
              </p>
            </div>
          </div>
        </div>
        {/*<!-- Logo Carousel Begin -->*/}
        <div className="logo-carousel">
          <div className="container">
            <div className="tecnology-carousel">
              <ReactOwlCarousel
                items={4}
                className="owl-theme"
                loop
                margin={100}
                responsiveClass={true}
                autoplay={true}
                responsive={obj.responsive}
              >
                <a
                  href="https://www.backbox.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <img src={ImgBackbox} alt="" />
                  </div>
                </a>
                <a
                  href="https://www.kali.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <ImgKali />
                  </div>
                </a>
                <a
                  href="https://blackarch.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <img src={ImgBlackarch} alt="" />
                  </div>
                </a>
                <a
                  href="https://www.parrotsec.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <img src={ImgParrot} alt="" />
                  </div>
                </a>
                <a
                  href="https://www.pentoo.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <img src={ImgPentoo} alt="" />
                  </div>
                </a>
                <a
                  href="https://www.metasploit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-item"
                >
                  <div className="lc-item-inner">
                    <img src={ImgMetasploit} alt="" />
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
export default Distribuition;
