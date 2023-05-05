import { selector, selectorFamily } from "recoil";
import { ISysMultiDataArticles } from "../../../interfaces/aplication/ISysMultiDataArticles";
import { IArtigo } from "../../../interfaces/IArtigo";
import { IAutor } from "../../../interfaces/IAutor";
import { ICategoria } from "../../../interfaces/ICategoria";
import { IPaginacao } from "../../../interfaces/IPaginacao";
import http from "../../../utils/http";
import { filtroPaginationState } from "../../atom";
import { sysGetCategorias, sysListaCategorias, sysSetAutor, sysSetCategoria } from "../atom";

export const sysGetCategoriasAsync = selector({
    key: '_sysGetCategoriasAsync',
    get: async () => {
        const promises = await http.get<ICategoria[]>(`/categoria`);
        const resposta: ICategoria[] = promises.data;
        return resposta;
    }
})

export const sysSelectCategoriaAsyncFamily = selectorFamily({
    key: '_sysSelectCategoriaAsyncFamily',
    get: (queryParameters) => async ({ get }) => {
        const filtro = get(sysListaCategorias);
        const responseBody: ICategoria = filtro.filter(cat => cat.id === queryParameters)[0];
        return responseBody;
    }
})

export const sysAutorAsyncFamily = selectorFamily({
    key: '_sysAutorAsyncFamily',
    get: (queryParameters) => async () => {
        const promises = await http.get<IPaginacao<IAutor>>(`/autor/paginacao?size=5&page=${Number(queryParameters)}&sort=id`)
        const resposta: IPaginacao<IAutor> = promises.data;
        return resposta;
    }
});

export const sysAutorOfPostAsyncFamily = selectorFamily({
    key: '_sysAutorOfPostAsyncFamily',
    get: (queryParameters) => async ({ get }) => {
        const pag = get(filtroPaginationState);
        const selectCategoria = get(sysSetCategoria)
        const autor = get(sysSetAutor)
        const responseBody = {} as ISysMultiDataArticles;
        responseBody.autor = autor;
        responseBody.categoria = selectCategoria;
        //throw new Error('Test!');
        const promises = await http.post<IPaginacao<IArtigo>>(`/articles/autorCategoriasArtigos?size=3&page=${pag.paginas}&sort=id,desc`, responseBody)
        const resposta: IPaginacao<IArtigo> = promises.data;
        return resposta;
    }
})
export const sysAutorOfPostAsyncALL = selector({
    key: '_sysAutorOfPostAsyncALL',
    get: async ({ get }) => {
        const pag = get(filtroPaginationState);
        const promises = await http.get<IPaginacao<IArtigo>>(`/articles?size=6&page=${pag.paginas}&sort=id,desc`)
        const resposta: IPaginacao<IArtigo> = promises.data;
        return resposta;
    }
})

export const sysCategoriasAsyncALL = selector({
    key: '_sysCategoriasAsyncALL',
    get: async ({ get }) => {
        const pag = get(filtroPaginationState);
        const promises = await http.get<IPaginacao<ICategoria>>(`categoria/paginacao?size=4&page=${pag.paginas}`)
        const resposta: IPaginacao<ICategoria> = promises.data;
        return resposta;
    }
})
export const sysAutorAsyncALL = selector({
    key: '_sysAutorAsyncALL',
    get: async ({ get }) => {
        const pag = get(filtroPaginationState);
        const promises = await http.get<IPaginacao<IAutor>>(`/autor/paginacao?size=3&page=${pag.paginas}&sort=id`)
        const resposta: IPaginacao<IAutor> = promises.data;
        return resposta;
    }
})