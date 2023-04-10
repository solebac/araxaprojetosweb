import * as React from "react";
import { toast } from "react-toastify";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
};

const BotaoEnviar = ({ type }: Props) => {
  toast.success("Enviando...");
  return <input type={type} value="Enviar" className="enviar" />;
};
export default BotaoEnviar;
