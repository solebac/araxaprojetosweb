import "../../../assets/css/navs.css";
import "../../../assets/css/home.css";
import "../../../assets/css/buttons.css";
import "../../../assets/css/news.css";
import "../../../assets/css/util/media-home.css";

import BannerHome from "../../../components/BannerHome";
import Navbar from "../../../components/Navbar";

import Footers from "../../../components/Footers";
import VLibras from "@djpfs/react-vlibras";
import ScrollToTop from "../../../utils/ScrollToTop";
import Capa from "../../../components/conteudo/blog/Details/Capa";
import MainPosts from "../../../components/conteudo/blog/Details/Capa/MainPosts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Artigo, ArtigoRecents } from "../../../types/artigo";
import {
  getPostsUrl,
  ResetArt,
  ResetRecents,
} from "../../../services/ArticlesHome.services";
import { PostsTitle } from "../../../types/blog";
import { getPostSlog } from "../../../services/Blog.services";
import PostsBody from "../PostsBody";

function Posts() {
  const { url } = useParams();
  const [infor, setInfor] = useState<PostsTitle>({
    titulo: "Texto em rascunho não liberado.",
    authorName: "Desconhecido",
    publicacao: "0000-00-00",
  });

  const [artigo, setArtigo] = useState<Artigo>(ResetArt);
  const [recents, setRecents] = useState<ArtigoRecents[]>([ResetRecents]);
  const [slogUrl, setSlogUrl] = useState<string[]>([]);

  useEffect(() => {
    getPostSlog(setArtigo, setInfor, url);
    getPostsUrl(setRecents, setSlogUrl, 3, url);
  }, [url]);
  return (
    <>
      <BannerHome />
      <Navbar />
      <Capa infor={infor} />
      <MainPosts>
        <PostsBody artigo={artigo} recents={recents} url={slogUrl} />
      </MainPosts>
      <VLibras />
      <ScrollToTop />
      <Footers />
    </>
  );
}

export default Posts;
