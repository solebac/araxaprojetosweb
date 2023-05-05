import { useEffect } from "react";
import "../../../assets/css/hacker.css";
import BannerHacker from "../../../components/BannerHacker";
import BannerTop from "../../../components/conteudo/hacker/attack/BannerTop";
import Container from "../../../components/conteudo/hacker/Container";
import Footers from "../../../components/Footers";
import ScrollToTop from "../../../utils/ScrollToTop";
import VLibras from "@djpfs/react-vlibras";
import Distribuition from "../../../components/conteudo/hacker/ethical/Distribuition";
import PostDispatcher from "../../../components/conteudo/hacker/attack/PostDispatcher";
import ModalInfor from "../../../components/conteudo/hacker/ModalInfor";

const Attack = () => {
  useEffect(() => {
    testOnload();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function testOnload() {
    const test = document.getElementById("btnInitial");
    test?.click(); //Load components <ModalInfor>
  }
  return (
    <>
      <BannerHacker uri="Attack" />
      <Container>
        <BannerTop />
        <PostDispatcher />
        <Distribuition />
        <ModalInfor />
      </Container>
      <VLibras />
      <ScrollToTop />
      <Footers />
    </>
  );
};
export default Attack;
