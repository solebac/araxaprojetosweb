import { useEffect, useState } from "react";
import "../../assets/css/recursos.css";
import { IPostsNews } from "../../interfaces/IBlog";
import { getPostNews } from "../../services/Blog.services";
import Easy from "../conteudo/home/Easy";
import Noticias from "../conteudo/home/Noticias";
import Portifolio from "../conteudo/home/Portifolio";
import Technology from "../conteudo/home/Technology";
import Videos from "../conteudo/home/Videos";

const MainHome = () => {
  const [news, setNews] = useState<IPostsNews[]>([]);
  useEffect(() => {
    getPostNews(setNews);
  }, []);

  return (
    <>
      <Portifolio />
      <Easy />
      <Technology />
      <Videos />
      <Noticias news={news} />
    </>
  );
};
export default MainHome;
