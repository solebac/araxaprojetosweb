import React from "react";
import imgTest01 from "../../../../../../assets/img/blog/blog-1.jpg";
import {ReactComponent as ImgIcoRight} from "../../../../../../assets/img/fonts-icon/arrow_right.svg";

const Dispatche = () => {
  return (
    <>
      <article className="attack__cabecalho">
        <a href="attack-details.html" className="attack__cabecalho-link">
          <img
            src={imgTest01}
            className="img-responsive img_principal"
            alt=""
          />
        </a>
        <p className="attack__titulo">
          Companies often use reverse engineering on old electronic components,
          such as discontinued printed circuit boards (PCBs) and connecting
          cards.
        </p>
        <p className="attack__text">
          If an old piece of computer equipment had functions that have since
          been lost amid the subsequent changes in technology, reverse
          engineering allows manufacturers to rediscover these
        </p>
        <p>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="attack__read-more"
          >
            Read more
            <ImgIcoRight />
          </a>
        </p>
      </article>
    </>
  );
}
export default Dispatche;