import { toast } from "react-toastify";
import { IArtigo } from "../interfaces/IArtigo";
import { IArtigoDto } from "../interfaces/IArtigoDto";
import { ICategoria } from "../interfaces/ICategoria";
import { IPaginacao } from "../interfaces/IPaginacao";
import { ISecao } from "../interfaces/ISecao";
import { CategoriaDTO } from "../types/CategoriaDTO";
/*import { Secao } from "../types/secao";*/
import http from "../utils/http";
import { BASE_URL } from "../utils/requests";

export const getArtigos = async (setPage: React.Dispatch<React.SetStateAction<IPaginacao<IArtigo> | undefined>>, page: number) => {

    await http
        .get<IPaginacao<IArtigo>>(`/articles?size=6&page=${page}&sort=id,desc`)
        .then(res => {
            const data = res.data;
            setPage(data);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}
export const postArticlesOfAutor = async (setPage: any, responseBody: any, page: number) => {

    await http
        .post<IPaginacao<IArtigo>>(`/articles/autorCategoriasArtigos?size=3&page=${page}&sort=id,desc`, responseBody)
        .then(res => {
            const data = res.data;
            setPage(data);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}

export const getArticlesId = async (setDados: React.Dispatch<React.SetStateAction<IArtigoDto>>,
    setCategory: React.Dispatch<React.SetStateAction<ICategoria>>,
    setSecao: React.Dispatch<React.SetStateAction<ISecao>>, id: number) => {
    await http
        .get<IArtigoDto>(`articles/${id}`)
        .then(res => {
            const data = res.data;
            setDados(data)
            const objCategoria: CategoriaDTO = {
                id: Number(Object.values(data.categorias)[0]),
                nome: Object.values(data.categorias)[1].toString(),
                descricao: Object.values(data.categorias)[2].toString(),
            }
            setCategory(objCategoria);

            const idSecao = Number(Object.values(data.secao)[0]) === 0 ? null : Number(Object.values(data.secao)[0]);
            const nomeSecao = (!(Object.values(data.secao)[1] === null)) ? Object.values(data.secao)[1].toString() : null;

            const objSecao: ISecao = {
                id: idSecao,
                nome: nomeSecao
            }
            setSecao(objSecao);
        }).catch(error => {
            // do something with error
            console.log(error)
        });
}
export const postArticles = async (setDados: any, responseBody: IArtigo) => {
    await http
        .post<IArtigo>(`articles`, responseBody)
        .then(res => {
            const data = res.data;
            setDados(data.id);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}

export const postArticlesInsertFile = async (setDados: any, formData: any) => {
    await http
        .post<IArtigo>(`articles/insertFull`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(res => {
            //toast.success("Salvo com sucesso...");
            const data = res.data;
            setDados(data.id);
        })
        .catch(error => {
            // do something with error
            toast.error(error);
            console.log(error)
        });
}
export const putArticlesUpdateFile = async (key: number, setDados: any, formData: any) => {

    http.put<IArtigo>(`articles/updateFull/${key}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then(res => {
            //toast.success("Salvo alteração sucesso...");
            const data = res.data;
            setDados(data.id);
        })
        .catch(error => {
            // do something with error
            toast.error(error);
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
            //console.log(response);
        })
        .then((data) => data);
}