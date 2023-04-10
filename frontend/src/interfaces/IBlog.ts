export interface IPostsTitle {
    titulo: string;
    authorName: string;
    publicacao: string;
};
export interface IPostsNews {
    id: number;
    categoria_id: number;
    titulo: string;
    data_publicacao: string;
    slog: string;
    url: string;
}