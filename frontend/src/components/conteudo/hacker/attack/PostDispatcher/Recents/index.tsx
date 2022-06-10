import React from "react";
import {ReactComponent as ImgGoogle} from "../../../../../../assets/img/card/google.svg";

const Recents = () => {
  return (
    <>
      <article className="card mb-4">
        <ImgGoogle aria-label="" className="card-img-top" />
        <div className="card-body">
          <p className="card-title">Card Title</p>
          <p className="card-text">
            O Kali Linux é uma evolução do Backtrack e pode ser baixado aqui
            http://www.kali.org, ele é mantido pela mesma empresa de segurança
            do Backtrack.
          </p>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="btn btn-outline-dark btn-sm"
          >
            Go somewhere
          </a>
        </div>
      </article>
    </>
  );
};
export default Recents;
