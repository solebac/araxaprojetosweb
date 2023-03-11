import { Artigo } from "../types/artigo";
import { PostsTitle } from "../types/blog";
import http from "../utils/http"

export const getPostSlog = async (setPage: any, setInfor: any, slog: any) => {
    await http.get(`/articles/posts/${slog}`)
        .then(res => {
            const data = res.data as Artigo;
            setPage(data);

            const infor: PostsTitle = {
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