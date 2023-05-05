import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IArtigo } from "../../interfaces/IArtigo";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { IRenderQuarentera } from "../../interfaces/IRenderQuarentera";
import { listaArtigos, setPaginacaoArtigo } from "../atom";

function useContextRenderQuarentera<T = IRenderQuarentera>(categoriaId: number): IRenderQuarentera {
    const page = useRecoilValue(listaArtigos(categoriaId));
    const setArtigo = useSetRecoilState<IPaginacao<IArtigo>>(setPaginacaoArtigo);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setArtigo(page);
        if (page && page?.totalPages > 1) {
            setVisible(true);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])//}, [page?.totalPages]);

    return { page, visible }
}
export default useContextRenderQuarentera;