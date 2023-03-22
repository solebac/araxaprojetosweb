import { useEffect, useState } from "react";
import { Artigo, ArtigoPage } from "../../../../types/artigo";
import DispacheCard from "./DispacheCard";
import Pagination from "./Pagination";
import RecentCard from "./RecentCard";

type Props = {
  destaque: Artigo | undefined;
  page: ArtigoPage;
  onChange: Function;
};

const PostDispache = ({ destaque, page, onChange }: Props) => {
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
