import { IArtigo } from "./IArtigo";
import { IAutor } from "./IAutor";
import { ICategoria } from "./ICategoria";
import { IPaginacao } from "./IPaginacao";
import { ISecao } from "./ISecao";

export const ResetSecao: ISecao = {
    id: null,
    nome: ""
};
export const ResetAutor: IAutor = {
    id: 0,
    nome: "",
    bio: "",
    foto: "",
    email: "",
    usuario: "",
    senha: ""
};
export const ResetCategoria: ICategoria = {
    id: 0,
    nome: "",
    descricao: "",
    secao: []
}
export const ResetArtigo: IArtigo = {
    id: 0,
    titulo: "",
    dataPublicacao: "",
    conteudoIntroducao: "",
    conteudoParagrafoOne: "",
    conteudoParagrafoTwo: "",
    conteudoConclusao: "",
    status: "",
    url: "",
    slog: "",
    imgDestaque: "",
    imgCard: "",
    contador: 0,
    autor: [],
    comment: [],
    tag: [],
    secao: { id: null, nome: "" },
    categorias: []
}

export const ResetRecents = {
    id: 0,
    url: "",
    status: "",
    titulo: "",
    conteudo: "",
    contador: 0,
    autor_id: 0,
    data_publicacao: "",
    img_card: "",
    slog: ""
}

export const ResetPageable: IPaginacao<any> = {
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

