import * as React from "react";
import "../../assets/css/recursos.css";
import Easy from "../conteudo/home/Easy";
import Noticias from "../conteudo/home/Noticias";
import Portifolio from "../conteudo/home/Portifolio";
import Technology from "../conteudo/home/Technology";
import Videos from "../conteudo/home/Videos";

const MainHome = () => {
  return (
    <>
      <Portifolio />
      <Easy />
      <Technology />
      <Videos />
      <Noticias />
    </>
  );
};
export default MainHome;
