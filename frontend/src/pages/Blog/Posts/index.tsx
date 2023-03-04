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

function Posts() {
  return (
    <>
      <BannerHome />
      <Navbar />
      <Capa />
      <MainPosts>
        <h1>Flavio-Teste</h1>
      </MainPosts>
      <VLibras />
      <ScrollToTop />
      <Footers />
    </>
  );
}

export default Posts;
