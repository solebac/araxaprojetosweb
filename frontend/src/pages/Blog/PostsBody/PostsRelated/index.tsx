import { IArtigoRecents } from "../../../../interfaces/IArtigoRecents";
import Postagem from "./Postagem";

type Props = {
  recents: IArtigoRecents[];
};

const PostsRelated = ({ recents }: Props) => {
  let postsRecents = [...recents];
  postsRecents = postsRecents.sort(() => 0.5 - Math.random()).slice(0, 3);
  return (
    <>
      <div className="bc-widget">
        <h4>Posts Relacionados</h4>
        <div className="related-post">
          <div className="row">
            {postsRecents.map((posts) => {
              return <Postagem key={posts.id} posts={posts} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default PostsRelated;
