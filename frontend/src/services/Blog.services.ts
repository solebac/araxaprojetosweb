import { IArtigo } from "../interfaces/IArtigo";
import { IPostsNews, IPostsTitle } from "../interfaces/IBlog";
import http from "../utils/http"

export const getPostSlog = async (setPage: React.Dispatch<React.SetStateAction<IArtigo | undefined>>,
    setInfor: React.Dispatch<React.SetStateAction<IPostsTitle>>, url: string | undefined) => {
    await http.get<IArtigo>(`/articles/posts/${url}`)
        .then(res => {

            const data = res.data;

            setPage(data);

            const infor: IPostsTitle = {
                titulo: data.titulo,
                publicacao: new Date(data.dataPublicacao).toDateString(),
                authorName: Object.values(data.autor)[1].toString()
            }
            setInfor(infor);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}

export const getPortiforioUrl = async (setPage: React.Dispatch<React.SetStateAction<IArtigo>>, url: any) => {
    await http.get<IArtigo>(`/articles/posts/${url}`)
        .then(res => {
            const data = res.data;
            setPage(data);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}

export const getPostNews = async (setPage: React.Dispatch<React.SetStateAction<IPostsNews[]>>) => {
    await http.get<IPostsNews[]>(`/articles/posts/news`)
        .then(res => {
            const data = res.data;
            setPage(data);
        })
        .catch(error => {
            // do something with error
            console.log(error)
        });
}