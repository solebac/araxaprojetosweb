import { Dispatch, SetStateAction } from 'react';
import { IArtigo } from '../interfaces/IArtigo';
import { IArtigoRecents } from '../interfaces/IArtigoRecents';
import { ICategoria } from '../interfaces/ICategoria';
import { IPaginacao } from '../interfaces/IPaginacao';
import http from '../utils/http';

//Seção Blog com pages and destaques
export const getArticlesPagabled = async (
    setPage: React.Dispatch<React.SetStateAction<IPaginacao<IArtigo> | undefined>>,
    setDestaque: React.Dispatch<React.SetStateAction<IArtigo | undefined>>,
    page: number, responseBody: ICategoria) => {

    await http
        .post<IPaginacao<IArtigo>>(`/articles/subcategorias?size=4&page=${page}&sort=id,desc`, responseBody)
        .then(res => {
            const data = res.data;
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
export const getArticlesPagabledLight = async (setPage: React.Dispatch<React.SetStateAction<IPaginacao<IArtigo> | undefined>>, page: number, responseBody: ICategoria) => {
    await http
        .post<IPaginacao<IArtigo>>(`/articles/subcategorias?size=4&page=${page}&sort=id,desc`, responseBody)
        .then(res => {
            const data = res.data;
            setPage(data);
            //test console.log(data)
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}

export const getPosts = async (setDados: React.Dispatch<React.SetStateAction<IArtigoRecents[]>>, count: number, categoria_id: number) => {
    await http
        //.get<ArtigoRecents[]>(`articles/recents/5`)
        .get<IArtigoRecents[]>(`articles/recents/${count}/${categoria_id}`)
        .then(res => { setDados(res.data) }).catch(error => {
            console.log(error)
        });
}

export const getPostsUrl = async (
    setDados: React.Dispatch<React.SetStateAction<IArtigoRecents[]>>,
    setUrl: Dispatch<SetStateAction<string[]>>,
    count: number,
    url: string | undefined, categoria_id: number
) => {
    await http
        //.get<ArtigoRecents[]>(`articles/recents/5`)
        .get<IArtigoRecents[]>(`articles/recents/${count}/${categoria_id}`)
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