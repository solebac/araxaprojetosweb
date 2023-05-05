import CardDispatcher from "./CardDispatcher";
import Pagination from "../../../../Pagination";
import { IRenderQuarentera } from "../../../../../interfaces/IRenderQuarentera";
import useContextRenderQuarentera from "../../../../../state/hooks/useContextRenderQuarentera";

const PostDispatcher = () => {
  const { page, visible } = useContextRenderQuarentera<IRenderQuarentera>(4);

  return (
    <>
      <div className="mt-1">
        {/*<!--Begin seção Retrato-->*/}
        <div className="row">
          {page?.content?.map((item) => {
            return <CardDispatcher key={item.id} post={item} />;
          })}
        </div>

        <div className="row">
          <div className="col-md-12" style={{ float: "left" }}>
            {visible && <Pagination etapaAtual={0} />}
          </div>
        </div>

        {/*<!--end seção Retrato-->*/}
      </div>
    </>
  );
};
export default PostDispatcher;
