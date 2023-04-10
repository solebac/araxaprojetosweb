import { Fragment } from "react";
import { ISecaoCategoria } from "../../../../../../interfaces/ISecao";
type Props = {
  secao: ISecaoCategoria;
};

const CardSection = ({ secao }: Props) => {
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
