type Props = {
  type?: "button" | "submit" | "reset" | undefined;
};

const BotaoEnviar = ({ type }: Props) => {
  return <input type={type} value="Enviar" className="enviar" />;
};
export default BotaoEnviar;
