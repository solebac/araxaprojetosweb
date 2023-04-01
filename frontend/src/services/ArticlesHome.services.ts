import { Dispatch, SetStateAction } from 'react';
import { ArtigoPage, ArtigoRecents } from '../types/artigo';
import http from '../utils/http';

export interface ICategorias {
    id: string
    nome: string
    descricao: string
}
//Pagination
export const ResetArt = {
    id: 0,
    titulo: "",
    dataPublicacao: "",
    conteudoIntroducao: "",
    conteudoParagrafoOne: "",
    conteudoParagrafoTwo: "",
    conteudoConclusao: "",
    status: "",
    url: "",
    slog: "",
    imgDestaque: "",
    imgCard: "",
    contador: 0,
    autor: [],
    comment: [],
    tag: [],
    secao: [],
    categorias: [],
}
export const ResetPage = {
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 5,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
};

export const ResetRecents = {
    id: 0,
    url: "",
    status: "",
    titulo: "",
    conteudo: "",
    contador: 0,
    autor_id: 0,
    data_publicacao: "",
    img_card: "",
    slog: ""
}
export const ResetSecao = {
    contador: 0,
    nome: '',
    categoria_id: 0,
    secao_id: 0
}
//Seção Blog com pages and destaques
export const getArticlesPagabled = async (setPage: any, setDestaque: any, page: number, responseBody: ICategorias) => {

    await http
        .post(`/articles/subcategorias?size=3&page=${page}&sort=id,desc`, responseBody)
        .then(res => {
            const data = res.data as ArtigoPage;
            setPage(data);
            const objectDestaque = Object.values(data.content)[0];
            setDestaque(objectDestaque);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}
//Seção sem destaques
export const getArticlesPagabledLight = async (setPage: any, page: number, responseBody: ICategorias) => {
    await http
        .post(`/articles/subcategorias?size=4&page=${page}&sort=id,desc`, responseBody)
        .then(res => {
            const data = res.data as ArtigoPage;
            setPage(data);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}
export const getPosts = async (setDados: any, count: number) => {
    await http
        //.get<ArtigoRecents[]>(`articles/recents/5`)
        .get<ArtigoRecents[]>(`articles/recents/${count}`)
        .then(res => { setDados(res.data) }).catch(error => {
            console.log(error)
        });
}

export const getPostsUrl = async (
    setDados: any,
    setUrl: Dispatch<SetStateAction<string[]>>,
    count: number,
    url: string | undefined
) => {
    await http
        //.get<ArtigoRecents[]>(`articles/recents/5`)
        .get<ArtigoRecents[]>(`articles/recents/${count}`)
        .then(res => {
            setDados(res.data);
            for (let i = 0; i < res.data.length; i++) {
                if (!(url === res.data[i].url)) {
                    setUrl((prevNames) => [...prevNames, res.data[i].url]);
                }
            }

        }).catch(error => {
            console.log(error)
        });
}

export const getSecao = async (categoria_id: number, setDados: any) => {
    await http.get(`/section/categoria/full/${categoria_id}`)
        .then((response) => {
            const data = response.data;
            setDados(data);
        })
        .catch(error => {
            console.log(error)
        });
}