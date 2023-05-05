import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ICategoria } from "../../../interfaces/ICategoria";
import { IPaginacao } from "../../../interfaces/IPaginacao";
import http from "../../../utils/http";
import { filtroPaginationState } from "../../atom";
import { sysGetCategoriasAsyncALL, sysSetPaginacaoCategoria } from "../atom";
import { IRenderSysPageCategorias } from "../interfaces/IRenderSysPageCategorias";

function useSysContextRenderPageCategorias<T = IRenderSysPageCategorias>(): IRenderSysPageCategorias {
    const categorias = useRecoilValue(sysGetCategoriasAsyncALL);
    const setCategorias = useSetRecoilState<IPaginacao<ICategoria>>(
        sysSetPaginacaoCategoria
    );

    const pageNumber = useRecoilValue(filtroPaginationState);
    const [status, setStatus] = useState(0);
    const [visible, setVisible] = useState(false);

    const excluir = (lineExcluir: ICategoria) => {
        http
            .delete(`categoria/${lineExcluir.id}`, {
                validateStatus(status) {
                    return (status >= 200 && status < 300) || status === 404;
                },
            })
            .then((resp) => {
                setStatus(resp.status);
                if (resp.status === 204) {
                    toast.success("Registro removido com sucesso...!");
                }
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        if (!(status === 404)) {
            setCategorias(categorias);
        } else {
            toast.warning(
                "Registro não pode ser removido, pois possui referencia com outros registros...!"
            );
        }
        if (categorias?.totalPages > 1) {
            setVisible(true);
        }
        setStatus(0); //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber, categorias, visible, status]);
    return { categorias, visible, excluir }
}
export default useSysContextRenderPageCategorias;