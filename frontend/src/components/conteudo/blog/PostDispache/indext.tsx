import { useEffect, useState } from "react";
import { IArtigo } from "../../../../interfaces/IArtigo";
import { IPaginacao } from "../../../../interfaces/IPaginacao";
import { ResetPageable } from "../../../../interfaces/reset";
import Pagination from "../../../Pagination";
import DispacheCard from "./DispacheCard";
import RecentCard from "./RecentCard";

type Props = {
  destaque: IArtigo | undefined;
  page?: IPaginacao<IArtigo>;
  onChange: Function;
};

const PostDispache = ({ destaque, page = ResetPageable, onChange }: Props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (page.totalPages > 1) {
      setVisible(true);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page.totalPages]);
  return (
    <>
      <div className="col-lg-8">
        <div className="blog-item-list">
          <DispacheCard post={destaque} />
          {/** BEGIN DIV POST-PUBLICAÇÃO */}
          {page?.content?.map((item) => {
            return <RecentCard key={item.id} post={item} />;
          })}
          {/** END DIV POST-PUBLICAÇÃO */}
        </div>

        {visible ? <Pagination page={page} onChange={onChange} /> : ""}
      </div>
    </>
  );
};
export default PostDispache;
