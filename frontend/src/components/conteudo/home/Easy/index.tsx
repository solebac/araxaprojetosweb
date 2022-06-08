import * as React from "react";
import { ReactComponent as ImgTerra } from "../../../../assets/img/home/img-terra.svg";

const Easy = () => {
  return (
    <>
      <section id="recurso">
        <div className="container">
          <div className="row texto-recurso">
            <div className="col-md-5 alinha-recurso">
              <p className="titulo-portifolio">Facil</p>
              <p className="subtitulo-portifolio subtitulo-portifolio--modifield">
                Buscar
              </p>
              <p className="text-portifolio">
                Trabalhe sua marca com nossos profissionais!
              </p>
              <p className="subtitulo-portifolio subtitulo-portifolio--modifield">
                Blog
              </p>
              <p className="text-portifolio">
                Discussões no mundo digital está aberta.
              </p>
              <p className="subtitulo-portifolio subtitulo-portifolio--modifield">
                Java | JavaScript
              </p>
              <p className="text-portifolio">
                O que é o Java e porque preciso dele?
              </p>
              <p className="subtitulo-portifolio subtitulo-portifolio--modifield">
                Fundamentos de Ethical Hacking
              </p>
              <p className="text-portifolio">
                Pentest! O que é?
                <br />
                Validação de linhas de defesa, eliminando redundâncias e
                conflitos na proteção de dados.
                <br />
                Cibersegurança - Detenha ataques cibernéticos.
                <br />
                Kali Linux | Penetration Testing and Ethical Hacking Linux.
              </p>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-7 img-feed">
                  <div className="img-capa">
                    <p className="img-titulo">A tecnologia move o mundo.</p>
                    <ImgTerra className="img-responsive center-block rotacionar-02 img" aria-label="A tecnologia move o mundo...!"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Easy;
