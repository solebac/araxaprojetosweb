import { useState } from "react";
import { IRenderPortifolio } from "../../../../interfaces/IRenderPortifolio";
import useContextRenderPortifolio from "../../../../state/hooks/useContextRenderPortifolio";
import Pagination from "../../../Pagination";
import Buscador from "./Buscador";
import CardDispatcher from "./CardDispatcher";

const Blackboard = () => {
  const [busca, setBusca] = useState("");
  const { page, visible } = useContextRenderPortifolio<IRenderPortifolio>(1);

  return (
    <>
      <aside className="col-md-8 portifolio-blog">
        <Buscador busca={busca} setBusca={setBusca} />
        <CardDispatcher post={page?.content} busca={busca} />
        <section>{visible ? <Pagination etapaAtual={0} /> : ""}</section>
      </aside>
    </>
  );
};
export default Blackboard;
