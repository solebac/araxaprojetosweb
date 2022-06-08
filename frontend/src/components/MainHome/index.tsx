import * as React from "react";
import Portifolio from "../conteudo/Portifolio";
import Easy from "../conteudo/Easy";
import Technology from "../conteudo/Technology";
import "../../assets/css/recursos.css";
import Noticias from "../conteudo/Noticias";

const MainHome = () => {
  return (
    <>
      <Portifolio />
      <Easy />
      <Technology />
      <Noticias />
    </>
  );
};
export default MainHome;
