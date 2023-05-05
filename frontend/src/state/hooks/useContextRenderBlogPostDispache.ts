import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { IArtigo } from "../../interfaces/IArtigo";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { IRenderBlogDispache } from "../../interfaces/IRenderBlogDispache";
import { ResetArtigo } from "../../interfaces/reset";
import { setArtigosDestaque, setPaginacaoArtigo } from "../atom";

function useContextRenderBlogPostDispache<T = IRenderBlogDispache>(): IRenderBlogDispache {
    const destaque = useRecoilValue(setArtigosDestaque);
    const paginacao: IPaginacao<IArtigo> = useRecoilValue(setPaginacaoArtigo);
    const [visible, setVisible] = useState(false);
    const [page, setPage] = useState<IArtigo[]>([ResetArtigo]);
    const [isDestaque, setIsDestaque] = useState(
        Object.keys(destaque).length === 0
    );
    useEffect(() => {
        if (paginacao.totalPages > 1) {
            setVisible(true);
        }
        if (paginacao.content) {
            const recentCard = paginacao.content.filter((item) => {
                return item.id !== destaque.id;
            });
            setPage(recentCard)
            setIsDestaque(false);
        }

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginacao.number, isDestaque]);
    return { page, destaque, visible, isDestaque };
}
export default useContextRenderBlogPostDispache;