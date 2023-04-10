import React from "react";
import { IAutor } from "../interfaces/IAutor";
import { IPaginacao } from "../interfaces/IPaginacao";
import http from "../utils/http";

export const getAutores = async (setDados: any) => {
    await http.get("/autor") //Depreciada
        .then(res => {
            setDados(res.data);
        })
        .catch(error => {
            console.log(error)
        });
}
export const getAutoresPage = async (setPage: React.Dispatch<React.SetStateAction<IPaginacao<IAutor> | undefined>>
    , pageNumber: number) => {
    await http.get<IPaginacao<IAutor>>(`/autor/paginacao?size=5&page=${pageNumber}&sort=id`)
        .then(res => {
            //const data = res.data as AutorPage;
            const data = res.data;
            setPage(data);
        })
        .catch(error => {
            console.log(error)
        });
}
export const getAutorId = async (setDados: any, autorId: number) => {
    await http
        .get<IAutor>(`/autor/${autorId}`)
        .then(res => {
            //const data = res.data as Autor;
            const data = res.data;
            setDados(data);
        })
        .catch(error => {
            console.error(error);
        })
}
export const postAutores = async (setDados: any, responseBody: IAutor) => {
    await http
        .post<IAutor>("/autor", responseBody)
        .then(res => {
            const data = res.data;
            //test console.log("Retorno DTO post.: ", data)
            setDados(data);
        })
        .catch(error => {
            console.log(error)
        });
}
export const putAutores = async (key: number, setDados: any, responseBody: IAutor) => {
    await http
        .put<IAutor>(`/autor/${key}`, responseBody)
        .then(res => {
            //const data = res.data as Autor;//Retorno de um DTO
            const data = res.data;
            console.log("Retorno DTO post.: ", data)
            setDados(data.id);
        })
        .catch(error => {
            console.log(error)
        });
}

export const postAutoresInsertFile = async (setDados: React.Dispatch<React.SetStateAction<IAutor | undefined>>, formData: any) => {
    await http
        .post<IAutor>("/autor/insertFull", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(res => {
            //const data = res.data as Autor;//Retorno de um DTO
            const data = res.data;
            //test console.log("Retorno DTO post.: ", data)
            setDados(data);
        })
        .catch(error => {
            console.log(error)
        });
}
export const putAutoresUpdateFile = async (key: number, setDados: React.Dispatch<React.SetStateAction<number>>, formData: any) => {
    await http
        .put(`/autor/updateFull/${key}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(res => {
            //const data = res.data as Autor;//Retorno de um DTO
            const data = res.data;
            //console.log("Retorno DTO post.: ", data)
            setDados(data.id);
        })
        .catch(error => {
            console.log(error)
        });
}