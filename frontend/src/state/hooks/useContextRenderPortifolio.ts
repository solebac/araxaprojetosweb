import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IArtigo } from "../../interfaces/IArtigo";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { IRenderPortifolio } from "../../interfaces/IRenderPortifolio";
import { filtroPaginationState, listaArtigos, setPaginacaoArtigo } from "../atom";


function useContextRenderPortifolio<T = IRenderPortifolio>(categoriaId: number): IRenderPortifolio {

    const page = useRecoilValue(listaArtigos(categoriaId));
    const setArtigo = useSetRecoilState<IPaginacao<IArtigo>>(setPaginacaoArtigo);
    const [visible, setVisible] = useState(false);
    //const [busca, setBusca] = useState("");
    const pageNumber = useRecoilValue(filtroPaginationState);

    useEffect(() => {
        setArtigo(page);
        if (page && page?.totalPages > 1) {
            setVisible(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page?.number, pageNumber]);

    return { page, visible };
}
export default useContextRenderPortifolio;