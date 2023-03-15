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
  getPosts,
  ResetArt,
  ResetRecents,
} from "../../../services/ArticlesHome.services";
import { PostsTitle } from "../../../types/blog";
import { getPostSlog } from "../../../services/Blog.services";
import PostsBody from "../PostsBody";

function Posts() {
  const { slug } = useParams();
  const [infor, setInfor] = useState<PostsTitle>({
    titulo: "Texto em rascunho não liberado.",
    authorName: "Desconhecido",
    publicacao: "0000-00-00",
  });
  console.log(slug);
  const [artigo, setArtigo] = useState<Artigo>(ResetArt);
  const [recents, setRecents] = useState<ArtigoRecents[]>([ResetRecents]);

  useEffect(() => {
    getPostSlog(setArtigo, setInfor, slug);
    getPosts(setRecents, 3);
  }, []);
  return (
    <>
      <BannerHome />
      <Navbar />
      <Capa infor={infor} />
      <MainPosts>
        <PostsBody artigo={artigo} recents={recents} />
      </MainPosts>
      <VLibras />
      <ScrollToTop />
      <Footers />
    </>
  );
}

export default Posts;
