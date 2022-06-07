import * as React from "react";

const Capa = () => {
  return (
    <section className="capa">
      <div className="texto-capa">
        <p className="titulo">
          Desenvolvimento de site <span className="texto-modifica">100%</span>{" "}
          tecnologia Java
        </p>
        <p className="subtitulo">Conceito de site inteligente.</p>
        <a href={`#`} className="btn btn-custom btn-left btn-lg">
          Demonstre sua marca na internet
        </a>
        <a href={`#`} className="btn btn-custom btn-rigth btn-lg">
          Atualize você mesmo seu site.
        </a>
      </div>
    </section>
  );
};
export default Capa;
