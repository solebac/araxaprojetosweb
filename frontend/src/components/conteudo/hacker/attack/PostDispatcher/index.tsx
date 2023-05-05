import BannerMidde from "./BannerMidde";
import CardRecents from "./CardRecents";
import CardSection from "./CardSection";
import Dispatche from "./Dispatcher";
import Pagination from "../../../../Pagination";
import useContextRenderHacker from "../../../../../state/hooks/useContextRenderHacker";
import { IRenderHacker } from "../../../../../interfaces/IRenderHacker";

const PostDispatcher = () => {
  const { page, recents, secao, visible } =
    useContextRenderHacker<IRenderHacker>(3);

  return (
    <>
      <article className="container">
        <div className="row mb-4 mt-1">
          {/*<!--Seção de Destaques-->*/}
          <div className="col-lg-8 col-md-8 col-sm-12">
            <p className="titulo-portifolio">Destaques</p>
            {/*<!--Modelo Painel Begin [loop]-->*/}
            {page?.content.map((item) => {
              return <Dispatche key={item.id} post={item} />;
            })}
            {/*<!--Modelo Painel End-->*/}

            {visible && <Pagination etapaAtual={0} />}
          </div>

          {/*<!--Seção de Posts Recents-->*/}
          <aside className="col-lg-4 col-md-4 col-sm-12">
            <p className="titulo-portifolio">Posts</p>

            {secao?.map((item) => {
              return <CardSection key={item.nome} secao={item} />;
            })}

            {/*<!--Seção Banner Fast [Publicidade]-->*/}

            <BannerMidde />

            {/*<!--Begin Seção Mini Banner|Loop[Post]-->*/}
            {recents.map((item) => {
              return <CardRecents recents={item} key={item.id} />;
            })}

            {/*<!--End Seção Mini Banner-->*/}
          </aside>
        </div>
      </article>
    </>
  );
};
export default PostDispatcher;
