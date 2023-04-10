export type ComentarioDTO = {
    id: number;
    nome: string;
    texto: string;
    data: string;
};
export const TResetComentario: ComentarioDTO = {
    id: 0,
    nome: "",
    texto: "",
    data: "",
};