import { useEffect, useState } from "react";
import "../../assets/css/recursos.css";
import { getPostNews } from "../../services/Blog.services";
import { PostsNews } from "../../types/blog";
import Easy from "../conteudo/home/Easy";
import Noticias from "../conteudo/home/Noticias";
import Portifolio from "../conteudo/home/Portifolio";
import Technology from "../conteudo/home/Technology";
import Videos from "../conteudo/home/Videos";

const MainHome = () => {
  const [news, setNews] = useState<PostsNews[]>([
    {
      id: 0,
      categoria_id: 3,
      titulo: "Notícia Desconhecida..!",
      data_publicacao: "0000-00-00",
      slog: "",
      url: "",
    },
  ]);
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
