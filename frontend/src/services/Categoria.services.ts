import { ArtigoPage } from "../types/artigo";
import { Categoria } from "../types/categoria";
import http from "../utils/http";
import { BASE_URL } from "../utils/requests";

export interface ICategoria {
    id: number;
    nome: string;
    descricao: string;
}
export const ResetCategoria = {
    id: 0,
    nome: "",
    descricao: ""
}
export const ResetCategoriaPage = {
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

export const getCategorias = async (setDados: any) => {
    await http.get("/categoria")
        .then(res => {
            setDados(res.data);
        })
        .catch(error => {
            console.log(error)
        });
}

export const getCategoriasPage = async (setPage: any, pageNumber: number) => {
    await http
        .get(`categoria/paginacao?size=5&page=${pageNumber}`)
        .then(res => {
            const data = res.data as ArtigoPage;
            setPage(data);
        })
        .catch(error => {
            console.log(error)
        });
}

export const getCategoriasId = async (setDados: any, categoriaId: number) => {
    await http
        .get(`/categoria/${categoriaId}`)
        .then((res) => {
            const data = res.data as Categoria;
            setDados(data);
        }).catch(error => {
            console.log(error)
        });
}

export const postCategoria = async (setDados: any, responseBody: ICategoria) => {
    await http
        .post(`/categoria`, responseBody)
        .then(res => {
            const data = res.data as Categoria;
            setDados(data);
        })
        .catch(error => {
            console.log(error)
        });
}

export const putCategoria = async (categoriaId: number, setDados: any, responseBody: ICategoria) => {
    await http
        .put(`/categoria/${categoriaId}`, responseBody)
        .then(res => {
            const data = res.data as Categoria;
            setDados(data.id);
        })
        .catch(error => {
            console.log(error)
        });
}