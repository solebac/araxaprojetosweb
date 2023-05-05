import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IArtigo } from "../../interfaces/IArtigo";
import { IPaginacao } from "../../interfaces/IPaginacao";
//import { IRenderBlog } from "../../interfaces/IRenderBlog";
import { filtroPaginationState, listaArtigos, setArtigosDestaque, listaArtigosRecents, setPaginacaoArtigo } from "../atom";

//function useContextRenderBlog<T = IRenderBlog>(categoriaId: number): IRenderBlog {
function useContextRenderBlog(categoriaId: number) {
    const page = useRecoilValue(listaArtigos(categoriaId));
    const setArtigo = useSetRecoilState<IPaginacao<IArtigo>>(setPaginacaoArtigo);

    const destaque: IArtigo = Object.values(page.content)[0];
    const setDestaque = useSetRecoilState<IArtigo>(setArtigosDestaque);

    const post = useRecoilValue(listaArtigosRecents(categoriaId));

    const pageNumber = useRecoilValue(filtroPaginationState);
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        //Set Global
        setArtigo(page);
        setDestaque(destaque);
        if (post) {
            setIsOnline("200");
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page?.number, pageNumber]);

    return isOnline;
}
export default useContextRenderBlog;