import { Artigo, ArtigoPage } from "../types/artigo";
import { Autor } from "../types/autor";
import { Categoria } from "../types/categoria";
import { Comentario } from "../types/comentario";
import { Secao } from "../types/secao";
import { Tag } from "../types/tag";
import http from "../utils/http";
import { BASE_URL } from "../utils/requests";

export const ResetArtigo = {
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
    categorias: []
}

export const ResetArtigoPage = {
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 10,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
}

export interface IArtigo {
    id: number;
    titulo: string;
    dataPublicacao: string;
    conteudoIntroducao: string;
    conteudoParagrafoOne: string;
    conteudoParagrafoTwo: string;
    conteudoConclusao: string;
    status: string;
    url: string;
    slog: string;
    imgDestaque: string;
    imgCard: string;
    contador: number;
    autor: Autor;
    comment: Comentario[];
    tag: Tag[];
    secao: {};
    categorias: Categoria;
};

export const getArtigos = async (setPage: any, page: number) => {

    await http
        .get(`/articles?size=6&page=${page}&sort=id,desc`)
        .then(res => {
            const data = res.data as ArtigoPage;
            setPage(data);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}
export const postArticlesOfAutor = async (setPage: any, responseBody: any, page: number) => {

    await http
        .post(`/articles/autorCategoriasArtigos?size=3&page=${page}&sort=id,desc`, responseBody)
        .then(res => {
            const data = res.data as ArtigoPage;
            setPage(data);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}
export const getArticlesId = async (setDados: any, setCategory: any, setSecao: any, id: number) => {
    await http
        .get(`articles/${id}`)
        .then(res => {
            const data = res.data as Artigo;
            const objCat = { id: Object.values(data.categorias)[0], nome: Object.values(data.categorias)[1], descricao: Object.values(data.categorias)[2] }
            setDados(data)
            setCategory(objCat);
            setSecao(data.secao);
        }).catch(error => {
            // do something with error
            console.log(error)
        });
}
export const postArticles = async (setDados: any, responseBody: IArtigo) => {
    await http
        .post(`articles`, responseBody)
        .then(res => {
            const data = res.data as IArtigo;
            setDados(data.id);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}

export const postArticlesInsertFile = async (setDados: any, formData: any) => {

    await http
        .post(`articles/insertFull`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(res => {
            const data = res.data as IArtigo;
            setDados(data.id);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}
export const putArticlesUpdateFile = async (key: number, setDados: any, formData: any) => {
    http.put(`articles/updateFull/${key}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then(res => {
            const data = res.data as IArtigo;
            setDados(data.id);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}
//Object Modelo de uso com FETCH
export const postArticlesUploadsFetch = async (setDados: any, formData: any) => {

    await fetch(`${BASE_URL}/articles/uploads`, {
        method: "POST",
        headers: {
            Authorization: "Basic " + window.localStorage.getItem("verify"),
        },
        body: formData,
    })
        .then((response) => {
            if (!response.ok)
                throw new Error("não foi possível completar cadastro");

            //return response.text();
            console.log(response);
        })
        .then((data) => data);
}