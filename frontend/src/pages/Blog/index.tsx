import "../../assets/css/navs.css";
import "../../assets/css/blog.css";
import BannerBlog from "../../components/BannerBlog";
import Footers from "../../components/Footers";
import Container from "../../components/conteudo/blog/Container";
import PostDispache from "../../components/conteudo/blog/PostDispache/indext";
import PostRecent from "../../components/conteudo/blog/PostRecent";
import ScrollToTop from "../../utils/ScrollToTop";
import VLibras from "@djpfs/react-vlibras";
import { useEffect, useState } from "react";
import {
  getArticlesPagabled,
  getPosts,
} from "../../services/ArticlesHome.services";
import { ICategoria } from "../../interfaces/ICategoria";
import { IArtigo } from "../../interfaces/IArtigo";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { IArtigoRecents } from "../../interfaces/IArtigoRecents";

const categorias: ICategoria = {
  id: 2,
  nome: "Blog",
  descricao: "Discursões Sobre Tecnologias",
};

const Blog = () => {
  const [pageNumber, setPageNumber] = useState(0);
  //Criar um states para guardar no components a page

  //const [destaque, setDestaque] = useState<Artigo>(ResetArt);
  const [destaque, setDestaque] = useState<IArtigo>();

  const [page, setPage] = useState<IPaginacao<IArtigo>>();

  //Old const [post, setPost] = useState<ArtigoRecents[]>([ResetRecents]);
  const [post, setPost] = useState<IArtigoRecents[] | []>([]);

  // Similar ao componentDidMount e componentDidUpdate:
  // Armazenamento da pagina no estada PAGE
  useEffect(() => {
    getArticlesPagabled(setPage, setDestaque, pageNumber, categorias);

    getPosts(setPost, 5);
  }, [pageNumber]);
  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };
  return (
    <>
      <BannerBlog />
      <Container>
        <PostDispache
          destaque={destaque}
          page={page}
          onChange={handlerPageNumber}
        />
        <PostRecent post={post} id={destaque?.id} />
      </Container>
      <VLibras />
      <ScrollToTop />
      <Footers />
    </>
  );
};
export default Blog;
