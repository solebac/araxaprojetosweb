import { ICategoria } from "../interfaces/ICategoria";
import { IPaginacao } from "../interfaces/IPaginacao";
import http from "../utils/http";


export const getCategorias = async (setDados: any) => {
    await http.get("/categoria")
        .then(res => {
            setDados(res.data);
        })
        .catch(error => {
            console.log(error)
        });
}

export const getCategoriasPage = async (setPage: React.Dispatch<React.SetStateAction<IPaginacao<ICategoria> | undefined>>, pageNumber: number) => {
    await http
        .get<IPaginacao<ICategoria>>(`categoria/paginacao?size=5&page=${pageNumber}`)
        .then(res => {
            //const data = res.data as ArtigoPage;
            const data = res.data;
            setPage(data);
        })
        .catch(error => {
            console.log(error)
        });
}

export const getCategoriasId = async (setDados: React.Dispatch<React.SetStateAction<ICategoria>>, categoriaId: number) => {
    await http
        .get<ICategoria>(`/categoria/${categoriaId}`)
        .then((res) => {
            //const data = res.data as Categoria;
            const data = res.data;
            setDados(data);
        }).catch(error => {
            console.log(error)
        });
}

export const postCategoria = async (setDados: React.Dispatch<React.SetStateAction<ICategoria>>,
    responseBody: ICategoria) => {
    await http
        .post<ICategoria>(`/categoria`, responseBody)
        .then(res => {
            const data = res.data;
            setDados(data);
        })
        .catch(error => {
            console.log(error)
        });
}

export const putCategoria = async (categoriaId: number, setDados: React.Dispatch<React.SetStateAction<number>>, responseBody: ICategoria) => {
    await http
        .put(`/categoria/${categoriaId}`, responseBody)
        .then(res => {
            const data = res.data as ICategoria;
            setDados(data.id);
        })
        .catch(error => {
            console.log(error)
        });
}