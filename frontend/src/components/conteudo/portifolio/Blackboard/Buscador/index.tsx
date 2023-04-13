import React from "react";
import { CgSearch } from "react-icons/cg";
import "./buscador.css";

type Props = {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
};
const Buscador = (props: Props) => {
  const { busca, setBusca } = props;
  return (
    <>
      <div className="buscador">
        <input
          className="buscador--input"
          placeholder="Buscar"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
        />
        <CgSearch size={20} color="4c4d5e" />
      </div>
    </>
  );
};
export default Buscador;
