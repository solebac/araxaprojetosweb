import React from "react";
import BannerHacker from "../../../components/BannerHacker";
import Container from "../../../components/conteudo/hacker/Container";
import BannerTop from "../../../components/conteudo/hacker/quarentena/BannerTop";
import PostDispatcher from "../../../components/conteudo/hacker/quarentena/PostDispatcher";
import Footers from "../../../components/Footers";

const Quarentena = () => {
  
  return (
    <>
      <BannerHacker uri={"Quarentena"} />
      <Container>
        <BannerTop />
        <PostDispatcher />
      </Container>
      <Footers />
    </>
  );
};
export default Quarentena;
