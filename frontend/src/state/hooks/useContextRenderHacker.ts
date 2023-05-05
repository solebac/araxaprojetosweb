import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IArtigo } from "../../interfaces/IArtigo";
import { IArtigoRecents } from "../../interfaces/IArtigoRecents";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { IRenderHacker } from "../../interfaces/IRenderHacker";
import { ISecaoCategoria } from "../../interfaces/ISecao";
import { filtroPaginationState, listaArtigos, listaArtigosRecents, listaSecao, setPaginacaoArtigo } from "../atom";

function useContextRenderHacker<T = IRenderHacker>(categoriaId: number): IRenderHacker {

    const page: IPaginacao<IArtigo> = useRecoilValue(listaArtigos(categoriaId));
    const setArtigo = useSetRecoilState<IPaginacao<IArtigo>>(setPaginacaoArtigo);

    const recents: IArtigoRecents[] = useRecoilValue(listaArtigosRecents(categoriaId));
    const secao: ISecaoCategoria[] = useRecoilValue(listaSecao(categoriaId));
    const [visible, setVisible] = useState(false);

    const pageNumber = useRecoilValue(filtroPaginationState);

    useEffect(() => {
        setArtigo(page);
        if (page && page?.totalPages > 1) {
            setVisible(true);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page?.number, pageNumber]);
    return {
        page,
        recents,
        secao,
        visible
    };
}
export default useContextRenderHacker;