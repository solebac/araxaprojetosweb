import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IAutor } from "../../../interfaces/IAutor";
import { IPaginacao } from "../../../interfaces/IPaginacao";
import http from "../../../utils/http";
import { filtroPaginationState, setPaginacaoAutor } from "../../atom";
import { sysGetAutorsAsyncALL } from "../atom";
import { IRenderSysPageAutores } from "../interfaces/IRenderSysPageAutores";

function useSysContextRenderPageAutores<T = IRenderSysPageAutores>(): IRenderSysPageAutores {
    const autores = useRecoilValue(sysGetAutorsAsyncALL);
    const setAutores = useSetRecoilState<IPaginacao<IAutor>>(setPaginacaoAutor);
    const [visible, setVisible] = useState(false);
    const pageNumber = useRecoilValue(filtroPaginationState);

    const [status, setStatus] = useState(0);
    const excluir = (lineExcluir: IAutor) => {
        http
            .delete(`autor/${lineExcluir.id}`, {
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
            .catch((error) => console.error(error));
    };
    useEffect(() => {
        if (autores?.totalPages > 1) {
            setVisible(true);
        }
        if (!(status === 404)) {
            setAutores(autores);
        } else {
            toast.warning(
                "Registro não pode ser removido, pois possui referencia com outros registros...!"
            );
        }
        setStatus(0);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber, autores, visible, status]);
    return { autores, visible, excluir }
}
export default useSysContextRenderPageAutores;