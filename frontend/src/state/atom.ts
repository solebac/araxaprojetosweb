import { atom, atomFamily } from "recoil";
import { IArtigo } from "../interfaces/IArtigo";
import { IArtigoRecents } from "../interfaces/IArtigoRecents";
import { IAutor } from "../interfaces/IAutor";
import { IFiltrosPagination } from "../interfaces/IFiltrosPagination";
import { IPaginacao } from "../interfaces/IPaginacao";
import { ISecaoCategoria } from "../interfaces/ISecao";
import { CategoriaDTO } from "../types/CategoriaDTO";
import {
    artigosAsyncFamily
    , artigosRecentsAsyncFamily
    , categoriasAsync
    , secaoAsyncFamily
    , selectPageCategoriaAsyncFamily
} from "./seletores";

//All-in
export const listaDeCategorias = atom<CategoriaDTO[]>({
    key: '_listaDeCategorias',
    default: categoriasAsync
});
//Set object's
export const setPaginacaoArtigo = atom<IPaginacao<IArtigo> | null | any>({
    key: "_setPaginacaoArtigo",
    default: {}
})
export const setPaginacaoAutor = atom<IPaginacao<IAutor> | null | any>({
    key: "_setPaginacaoAutor",
    default: {}
})//sem uso ate o momento

export const setPageCategoria = atom<CategoriaDTO | null | any>({
    key: "_setPageCategoria",
    default: {}
})
export const setArtigosDestaque = atom<IArtigo | null | any>({
    key: '_setArtigosDestaque',
    default: {},
});

//Com parametro
export const listaArtigosRecents = atomFamily<IArtigoRecents[], number>({
    key: "_listaArtigosRecents",
    default: param => artigosRecentsAsyncFamily(param)
})
export const listaSecao = atomFamily<ISecaoCategoria[], number>({
    key: "_listaSecao",
    default: param => secaoAsyncFamily(param)
})
export const selectPageCategoria = atomFamily<CategoriaDTO, number>({
    key: "_selectPageCategoria",
    default: param => selectPageCategoriaAsyncFamily(param)
})
export const listaArtigos = atomFamily<IPaginacao<IArtigo>, number>({
    key: "_listaArtigos",
    default: param => artigosAsyncFamily(param)
});


export const filtroPaginationState = atom<IFiltrosPagination>({
    key: '_filtroPaginationState',
    default: { paginas: 0 }
})

//export const layoutPageBlog = atom({
export const layoutPage = atom({
    key: '_layoutPageBlog',
    default: { 'destaque': 1, 'bottom': 3, 'recents': 5 },
});

// export const layoutPageHacker = atom({
//     key: '_layoutPageHacker',
//     default: { 'destaque': 4, 'recents': 3 },
// });