import React, { Fragment } from "react";
import { SecaoCategoria } from "../../../../../../types/secao";

type Props = {
  secao: SecaoCategoria;
};

const CardSection = ({ secao }: Props) => {
  /*const secao = { //Com a props nÃ£o preciso mais de components
    id: 1,
    nome: "Coleta de InformaÃ§Ãµes",
    categoria_id: 1,
  };*/
  return (
    <Fragment>
      <a
        href="/#"
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-post"
      >
        {secao.nome} <span className="btn-post-span">{secao.contador}</span>
      </a>
    </Fragment>
  );
};
export default CardSection;
