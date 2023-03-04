import React from "react";

const Blackboard = () => {
  return (
    <>
      <aside className="col-md-8 portifolio-blog">
        <article className="portifolio__artigos">
          <div className="row portifolio__around">
            <div className="col-md-2 portifolio-reset">
              <p className="portifolio__slog">MySql</p>
            </div>
            <div className="col-md-10">
              <div className="portifolio_box">
                <p className="portifolio__data">
                  08 de março de 2000 - 4 min de leitura
                </p>
                <p className="portifolio__titulo">
                  O lorem ipsum lorem ipsum lorem ipsum MySql Contraint
                </p>
                <p className="portifolio__subtitulo">
                  Entenda como funciona o fluxo de validações de um SGDB MySql
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="portifolio__artigos">
          <div className="row portifolio__around">
            <div className="col-md-2 portifolio-reset">
              <p className="portifolio__slog">React</p>
            </div>
            <div className="col-md-10">
              <p className="portifolio__data">
                08 de março de 2000 - 4 min de leitura
              </p>
              <p className="portifolio__titulo">
                O que você não deve fazer sobre MySql Contraint
              </p>
              <p className="portifolio__subtitulo">
                Entenda como funciona o fluxo de validações de um SGDB MySql
              </p>
            </div>
          </div>
        </article>
      </aside>
    </>
  );
};
export default Blackboard;
