import { Autor, AutorPage } from "../types/autor";
import http from "../utils/http";

export interface IAutor {
    id: string;
    nome: string;
    bio: string;
    foto: string;
    email: string;
    senha: string;
    usuario: string;
}

export const ResetAutor = {
    id: 0,
    nome: "",
    bio: "",
    foto: "",
    email: "",
    usuario: "",
};
export const ResetAutorPage = {
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

export const getAutores = async (setDados: any) => {
    await http.get("/autor") //Depreciada
        .then(res => {
            setDados(res.data);
        })
        .catch(error => {
            console.log(error)
        });
}
export const getAutoresPage = async (setPage: any, pageNumber: number) => {
    await http.get(`/autor/paginacao?size=5&page=${pageNumber}&sort=id`)
        .then(res => {
            const data = res.data as AutorPage;
            setPage(data);
        })
        .catch(error => {
            console.log(error)
        });
}
export const getAutorId = async (setDados: any, autorId: number) => {
    await http
        .get<Autor>(`/autor/${autorId}`)
        .then(res => {
            const data = res.data as Autor;
            setDados(data);
        })
        .catch(error => {
            console.error(error);
        })
}
export const postAutores = async (setDados: any, responseBody: IAutor) => {
    await http
        .post("/autor", responseBody)
        .then(res => {
            const data = res.data as Autor;//Retorno de um DTO
            //test console.log("Retorno DTO post.: ", data)
            setDados(data);
        })
        .catch(error => {
            console.log(error)
        });
}
export const putAutores = async (key: number, setDados: any, responseBody: IAutor) => {
    await http
        .put(`/autor/${key}`, responseBody)
        .then(res => {
            const data = res.data as Autor;//Retorno de um DTO
            console.log("Retorno DTO post.: ", data)
            setDados(data.id);
        })
        .catch(error => {
            console.log(error)
        });
}

export const postAutoresInsertFile = async (setDados: any, formData: any) => {
    await http
        .post("/autor/insertFull", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(res => {
            const data = res.data as Autor;//Retorno de um DTO
            //test console.log("Retorno DTO post.: ", data)
            setDados(data);
        })
        .catch(error => {
            console.log(error)
        });
}
export const putAutoresUpdateFile = async (key: number, setDados: any, formData: any) => {
    await http
        .put(`/autor/updateFull/${key}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(res => {
            const data = res.data as Autor;//Retorno de um DTO
            console.log("Retorno DTO post.: ", data)
            setDados(data.id);
        })
        .catch(error => {
            console.log(error)
        });
}