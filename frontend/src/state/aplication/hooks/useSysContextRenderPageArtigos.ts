import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IArtigo } from "../../../interfaces/IArtigo";
import { IPaginacao } from "../../../interfaces/IPaginacao";
import http from "../../../utils/http";
import { filtroPaginationState, setPaginacaoArtigo } from "../../atom";
import { sysGetAutorOfPostAsyncALL } from "../atom";
import { IRenderSysPageArtigo } from "../interfaces/IRenderSysPageArtigo";

function useSysContextRenderPageArtigos<T = IRenderSysPageArtigo>(): IRenderSysPageArtigo {
    const artigos = useRecoilValue(sysGetAutorOfPostAsyncALL);
    const setArtigos = useSetRecoilState<IPaginacao<IArtigo>>(setPaginacaoArtigo);
    const pageNumber = useRecoilValue(filtroPaginationState);
    const [status, setStatus] = useState(0);

    const [visible, setVisible] = useState(false);

    const excluir = (lineExcluir: IArtigo) => {
        http
            .delete(`articles/${lineExcluir.id}`)
            .then((resp) => {
                toast.error("Removendo registro...");
                setStatus(resp.status);
            })
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        setArtigos(artigos);
        setStatus(0); //reset httpStatus
        if (artigos?.totalPages > 1) {
            setVisible(true);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber, visible, status]);
    return {
        artigos,
        visible,
        excluir
    }
}
export default useSysContextRenderPageArtigos;