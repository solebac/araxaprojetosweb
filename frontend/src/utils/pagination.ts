import { sysSetPaginacaoCategoria } from "../state/aplication/atom";
import { setPageCategoria, setPaginacaoArtigo, setPaginacaoAutor } from "../state/atom";

export const statesPagination = [
    setPaginacaoArtigo,
    sysSetPaginacaoCategoria,
    setPaginacaoAutor,
];