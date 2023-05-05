import { selector, selectorFamily } from "recoil";
import { IArtigo } from "../../interfaces/IArtigo";
import { IArtigoRecents } from "../../interfaces/IArtigoRecents";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { ISecaoCategoria } from "../../interfaces/ISecao";
import { CategoriaDTO } from "../../types/CategoriaDTO";
import http from "../../utils/http";
import { filtroPaginationState, layoutPage, listaDeCategorias } from "../atom";

export const artigosAsyncFamily = selectorFamily({
    key: '_artigosAsyncFamily',
    get: (queryParameters) => async ({ get }) => {
        const pag = get(filtroPaginationState);
        const filtro = get(listaDeCategorias);
        const responseBody = filtro.filter(cat => cat.id === queryParameters)[0];
        const promises = await http.post<IPaginacao<IArtigo>>(`/articles/subcategorias?size=4&page=${pag.paginas}&sort=id,desc`, responseBody);
        const resposta: IPaginacao<IArtigo> = promises.data;
        return resposta;
    }
});
//secaoAsyncFamily
export const secaoAsyncFamily = selectorFamily({
    key: '_secaoAsyncFamily',
    get: (queryParameters) => async ({ get }) => {
        const filtro = get(listaDeCategorias);
        const responseBody = filtro.filter(cat => cat.id === queryParameters)[0];
        const promises = await http.get(`/section/categoria/full/${responseBody.id}`);
        const resposta: ISecaoCategoria[] = promises.data;
        return resposta;
    }
});
export const artigosRecentsAsyncFamily = selectorFamily({
    key: '_artigosRecentsAsyncFamily',
    get: (queryParameters) => async ({ get }) => {
        const filtro = get(listaDeCategorias);
        const responseBody = filtro.filter(cat => cat.id === queryParameters)[0];
        const layout = get(layoutPage);
        let recents = layout.recents;
        if (responseBody.id === 3) recents = 3;
        const promises = await http.get<IArtigoRecents[]>(`articles/recents/${recents}/${responseBody.id}`)
        const resposta: IArtigoRecents[] = promises.data;
        return resposta;
    }
});

export const categoriasAsync = selector({
    key: '_categoriasAsync',
    get: async () => {
        const promises = await http.get<CategoriaDTO[]>(`/categoria`);
        const resposta: CategoriaDTO[] = promises.data;
        return resposta;
    }
})

export const selectPageCategoriaAsyncFamily = selectorFamily({
    key: '_selectPageCategoriaAsyncFamily',
    get: (queryParameters) => async ({ get }) => {
        const filtro = get(listaDeCategorias);
        const responseBody: CategoriaDTO = filtro.filter(cat => cat.id === queryParameters)[0];
        return responseBody;
    }
})