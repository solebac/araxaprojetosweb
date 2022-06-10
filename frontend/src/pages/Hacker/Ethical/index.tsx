import * as React from "react";
import BannerHacker from "../../../components/BannerHacker";
import Container from "../../../components/conteudo/hacker/Container";
import BannerFast from "../../../components/conteudo/hacker/ethical/BannerFast";
import Distribuition from "../../../components/conteudo/hacker/ethical/Distribuition";
import Information from "../../../components/conteudo/hacker/ethical/Information";
import Introdution from "../../../components/conteudo/hacker/ethical/Introdution";
import Penetration from "../../../components/conteudo/hacker/ethical/Penetration";
import Footers from "../../../components/Footers";
const Ethical = () => {
  return (
    <>
      <BannerHacker uri="Ethical" />
      <Container>
        <BannerFast />
        <Introdution />
        <Information />
        <Penetration />
        <Distribuition />
      </Container>
      <Footers />
    </>
  );
};
export default Ethical;
