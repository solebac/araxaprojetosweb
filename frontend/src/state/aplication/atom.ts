import { atom, atomFamily } from "recoil";
import { IArtigo } from "../../interfaces/IArtigo";
import { IAutor } from "../../interfaces/IAutor";
import { ICategoria } from "../../interfaces/ICategoria";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { storeParseAutor } from "../../services/Autentication.services";
import { BASE_PEOPLE } from "../../utils/requests";
import { sysAutorAsyncALL, sysAutorAsyncFamily, sysAutorOfPostAsyncALL, sysAutorOfPostAsyncFamily, sysCategoriasAsyncALL, sysGetCategoriasAsync, sysSelectCategoriaAsyncFamily } from "./seletores";

//Com parametro
export const sysGetCategorias = atomFamily<ICategoria, number>({
    key: "_sysGetCategorias",
    default: param => sysSelectCategoriaAsyncFamily(param)
})
export const sysGetAutor = atomFamily<IPaginacao<IAutor>, number>({
    key: "_sysGetAutor",
    default: param => sysAutorAsyncFamily(param)
});

export const sysGetPostOfAutor = atomFamily<IPaginacao<IArtigo>, number>({
    key: '_sysGetPostOfAutor',
    default: param => sysAutorOfPostAsyncFamily(param)
})
//All-in sysAutorOfPostAsyncALL
export const sysGetAutorOfPostAsyncALL = atom<IPaginacao<IArtigo>>({
    key: '_sysGetAutorOfPostAsyncALL',
    default: sysAutorOfPostAsyncALL
})
export const sysGetCategoriasAsyncALL = atom<IPaginacao<ICategoria>>({
    key: '_sysGetCategoriasAsyncALL',
    default: sysCategoriasAsyncALL
})
export const sysGetAutorsAsyncALL = atom<IPaginacao<IAutor>>({
    key: '_sysGetAutorAsyncALL',
    default: sysAutorAsyncALL
})
export const sysListaCategorias = atom<ICategoria[]>({
    key: '_sysListaCategorias',
    default: sysGetCategoriasAsync
})
export const sysListaAutor = atom<IAutor>({
    key: '_sysListaAutor',
    default: storeParseAutor(localStorage.getItem(BASE_PEOPLE))
})
//Set object
export const sysSetCategoria = atom<ICategoria | null | any>({
    key: "_sysSetCategoria",
    default: {}
})
export const sysSetPaginacaoCategoria = atom<IPaginacao<ICategoria> | null | any>({
    key: "_sysSetPaginacaoCategoria",
    default: {}
})
// export const sysSetPaginacaoArtigo = atom<IPaginacao<CategoriaDTO> | null | any>({//INATIVO
//     key: "sysSetPaginacaoArtigo",
//     default: setPaginacaoArtigo
// })//sem uso ate o momento
export const sysSetAutor = atom<IAutor | null | any>({
    key: "_sysSetAutor",
    default: {}
})