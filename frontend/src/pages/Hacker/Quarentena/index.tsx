import VLibras from "@djpfs/react-vlibras";
import React, { useEffect } from "react";
import BannerHacker from "../../../components/BannerHacker";
import Container from "../../../components/conteudo/hacker/Container";
import ModalInfor from "../../../components/conteudo/hacker/ModalInfor";
import BannerTop from "../../../components/conteudo/hacker/quarentena/BannerTop";
import PostDispatcher from "../../../components/conteudo/hacker/quarentena/PostDispatcher";
import Footers from "../../../components/Footers";
import ScrollToTop from "../../../utils/ScrollToTop";

const Quarentena = () => {
  useEffect(() => {
    testOnload();
    console.log("renderizou");
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function testOnload() {
    const test = document.getElementById("btnInitial");
    test?.click();
  }
  return (
    <>
      <BannerHacker uri={"Quarentena"} />
      <Container>
        <BannerTop />
        <PostDispatcher />
        <ModalInfor />
      </Container>
      <VLibras />
      <ScrollToTop />
      <Footers />
    </>
  );
};
export default Quarentena;
