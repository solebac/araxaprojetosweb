import React from "react";
import BannerHacker from "../../../components/BannerHacker";
import Container from "../../../components/conteudo/hacker/Container";
import BannerTop from "../../../components/conteudo/hacker/quarentena/BannerTop";
import Footers from "../../../components/Footers";

const Quarentena = () => {
  
  return (
    <>
      <BannerHacker uri={"Quarentena"} />
      <Container>
        <BannerTop />
      </Container>
      <Footers />
    </>
  );
};
export default Quarentena;
