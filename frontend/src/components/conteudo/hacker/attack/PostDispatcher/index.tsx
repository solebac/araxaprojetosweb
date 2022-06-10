import React from "react";
import BannerMidde from "./BannerMidde";
import Dispatche from "./Dispatcher";
import Recents from "./Recents";
import { ReactComponent as ImgFluxion } from "../../../../../assets/img/card/fluxion.svg";

const PostDispatcher = () => {
  return (
    <>
      <article className="container">
        <div className="row mb-4 mt-1">
          {/*<!--Seção de Destaques-->*/}
          <div className="col-lg-9 col-md-9 col-sm-12">
            <p className="titulo-portifolio">Destaques</p>
            {/*<!--Modelo Painel Begin [loop]-->*/}
            <Dispatche />
            {/*<!--Modelo Painel End-->*/}

            {/*<!--Loop-test=Modelo Painel Begin-->Test*/}
            <Dispatche />
            <Dispatche />
            <Dispatche />
            <Dispatche />
            {/*<!--Loop-test=Modelo Painel End-->Test*/}
          </div>

          {/*<!--Seção de Posts Recents-->*/}
          <aside className="col-lg-3 col-md-3 col-sm-12">
            <p className="titulo-portifolio">Posts</p>

            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Coleta de Informação <span className="btn-post-span">10</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Vulnerabilidades <span className="btn-post-span">2</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Fingerprinting <span className="btn-post-span">3</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Wireless <span className="btn-post-span">4</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Denial of Service <span className="btn-post-span">5</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              SQL Injection <span className="btn-post-span">6</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Cracking <span className="btn-post-span">7</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Man in the Middle <span className="btn-post-span">8</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Engenharia Social <span className="btn-post-span">9</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              WebShells <span className="btn-post-span">1</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Pentest <span className="btn-post-span">1</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              NMAP|Wireshark <span className="btn-post-span">1</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Reverse Engineering <span className="btn-post-span">1</span>
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-post"
            >
              Crawlers e Spiders <span className="btn-post-span">1</span>
            </a>
            {/*<!--Seção Banner Fast [Publicidade]-->*/}

            <BannerMidde />

            {/*<!--Begin Seção Mini Banner|Loop[Post]-->*/}
            <div className="card mb-4 mt-4">
              <ImgFluxion aria-label="" className="card-img-top" />
              <div className="card-body">
                <p className="card-title">Card Title</p>
                <p className="card-text">
                  O Kali Linux é uma evolução do Backtrack e pode ser baixado
                  aqui http://www.kali.org, ele é mantido pela mesma empresa de
                  segurança do Backtrack.
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
            </div>
            <Recents />
            {/*<!--End Seção Mini Banner-->*/}
          </aside>
        </div>
      </article>
    </>
  );
};
export default PostDispatcher;
