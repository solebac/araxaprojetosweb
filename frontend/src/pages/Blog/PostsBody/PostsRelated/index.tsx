import { ArtigoRecents } from "../../../../types/artigo";
import Postagem from "./Postagem";

type Props = {
  recents: ArtigoRecents[];
};

const PostsRelated = ({ recents }: Props) => {
  return (
    <>
      <div className="bc-widget">
        <h4>Posts Relacionados</h4>
        <div className="related-post">
          <div className="row">
            {recents.map((posts) => {
              return <Postagem key={posts.id} posts={posts} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default PostsRelated;
