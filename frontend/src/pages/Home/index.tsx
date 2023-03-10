import "../../assets/css/navs.css";
import "../../assets/css/home.css";
import "../../assets/css/buttons.css";
import "../../assets/css/news.css";

import "../../assets/css/util/media-home.css";
import BannerHome from "../../components/BannerHome";
import Navbar from "../../components/Navbar";
import Capa from "../../components/Capa";
import MainHome from "../../components/MainHome";
import Footers from "../../components/Footers";
import VLibras from "@djpfs/react-vlibras";
import ScrollToTop from "../../utils/ScrollToTop";
import { useEffect } from "react";
import { clearHeaders } from "../../services/Autentication.services";

function Home() {
  useEffect(() => {
    window.localStorage.clear();
    clearHeaders();
  }, []);
  return (
    <>
      <BannerHome />
      <Navbar />
      <Capa />
      <MainHome />
      <VLibras />
      <ScrollToTop />
      <Footers />
    </>
  );
}

export default Home;
