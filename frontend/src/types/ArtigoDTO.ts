import { IArtigoDto } from "../interfaces/IArtigoDto";
import { ResetSecao } from "../interfaces/reset";
import { TResetAutor } from "./AutorDTO";
import { TResetCategoria } from "./CategoriaDTO";

export const TResetArtigoDto: IArtigoDto = {
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
    autor: TResetAutor,
    comment: [],
    tag: [],
    secao: ResetSecao,
    categorias: TResetCategoria
}