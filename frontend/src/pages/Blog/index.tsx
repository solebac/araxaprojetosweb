import * as React from "react";
import "../../assets/css/navs.css";
import "../../assets/css/blog.css";
import BannerBlog from "../../components/BannerBlog";
import Footers from "../../components/Footers";
import Container from "../../components/conteudo/blog/Container";
import PostDispache from "../../components/conteudo/blog/PostDispache/indext";
import PostRecent from "../../components/conteudo/blog/PostRecent";
import ScrollToTop from "../../utils/ScrollToTop";
import VLibras from "@djpfs/react-vlibras";

const Blog = () => {
  return (
    <>
      <BannerBlog />
      <Container>
        <PostDispache />
        <PostRecent />
      </Container>
      <VLibras />
      <ScrollToTop />
      <Footers />
    </>
  );
};
export default Blog;
