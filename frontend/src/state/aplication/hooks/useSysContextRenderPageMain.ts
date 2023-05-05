import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IArtigo } from "../../../interfaces/IArtigo";
import { ICategoria } from "../../../interfaces/ICategoria";
import { IPaginacao } from "../../../interfaces/IPaginacao";
import { filtroPaginationState, setPaginacaoArtigo } from "../../atom";
import { sysGetCategorias, sysGetPostOfAutor, sysListaCategorias, sysSetCategoria } from "../atom";
import { IRenderSysPageMain } from "../interfaces/IRenderSysPageMain";
//IRenderSysPageArtigo
function useSysContextRenderPageMain<T = IRenderSysPageMain>(categoriaId: number): IRenderSysPageMain {

    const artigos = useRecoilValue(sysGetPostOfAutor(categoriaId));
    const setArtigos = useSetRecoilState<IPaginacao<IArtigo>>(setPaginacaoArtigo);

    const categorias = useRecoilValue(sysListaCategorias); //Preencher select

    const selectCategoria = useRecoilValue(sysGetCategorias(categoriaId)); //categoriaId (2)/-default-initial
    const setSelectCategoria = useSetRecoilState<ICategoria>(sysSetCategoria);

    const pageNumber = useRecoilValue(filtroPaginationState);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setArtigos(artigos);
        setSelectCategoria(selectCategoria)

        if (artigos?.totalPages > 1) {
            setVisible(true);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber, selectCategoria, visible]);

    return { artigos, categorias, visible, setSelectCategoria };

}
export default useSysContextRenderPageMain;