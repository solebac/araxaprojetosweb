import { useRecoilValue } from "recoil";
import { setArtigosDestaque, listaArtigosRecents } from "../atom";

function useContextRenderBlogPostRecents(categoriaId: number) {
    const destaque = useRecoilValue(setArtigosDestaque);
    const post = useRecoilValue(listaArtigosRecents(categoriaId));
    const newPosts = post
        .filter((item) => {
            return item.id !== destaque.id;
        })
        .sort(() => 0.5 - Math.random());
    return newPosts;
}
export default useContextRenderBlogPostRecents;