import React from "react";
import { IRenderBlogDispache } from "../../../../interfaces/IRenderBlogDispache";
import useContextRenderBlogPostDispache from "../../../../state/hooks/useContextRenderBlogPostDispache";
import Pagination from "../../../Pagination";
import DispacheCard from "./DispacheCard";
import RecentCard from "./RecentCard";

const PostDispache: React.FC = () => {
  const { page, destaque, visible, isDestaque } =
    useContextRenderBlogPostDispache<IRenderBlogDispache>();

  return (
    <>
      <div className="col-lg-8">
        <div className="blog-item-list">
          {!isDestaque && <DispacheCard post={destaque} />}
          {/** BEGIN DIV POST-PUBLICAÇÃO */}
          {page?.map((item) => {
            return <RecentCard key={item.id} post={item} />;
          })}
          {/** END DIV POST-PUBLICAÇÃO */}
        </div>

        {visible ? <Pagination etapaAtual={0} /> : ""}
      </div>
    </>
  );
};
export default PostDispache;
