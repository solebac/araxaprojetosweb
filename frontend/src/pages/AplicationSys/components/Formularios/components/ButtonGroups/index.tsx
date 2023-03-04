import React, { MouseEventHandler } from "react";

type Props = {
  handledGo: MouseEventHandler;
};
const ButtonGroups = ({ handledGo }: Props) => {
  return (
    <>
      <div
        className="btn-group btn-group-justified"
        role="group"
        aria-label="Finalizar cadastro...!"
      >
        <div className="btn-group" role="group">
          <button onClick={handledGo} type="button" className="btn btn-default">
            Voltar
          </button>
        </div>
        <div className="btn-group" role="group">
          <button type="reset" className="btn btn-danger">
            Cancelar
          </button>
        </div>
        <div className="btn-group" role="group">
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </div>
      </div>
    </>
  );
};
export default ButtonGroups;
