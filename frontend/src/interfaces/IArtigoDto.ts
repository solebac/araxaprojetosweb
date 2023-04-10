import { AutorDTO } from "../types/AutorDTO";
import { CategoriaDTO } from "../types/CategoriaDTO";
import { ComentarioDTO } from "../types/ComentarioDTO";
import { ISecao } from "./ISecao";
import { ITags } from "./ITag";

export interface IArtigoDto {
    id: number;
    titulo: string;
    dataPublicacao: string;
    conteudoIntroducao: string;
    conteudoParagrafoOne: string;
    conteudoParagrafoTwo: string;
    conteudoConclusao: string;
    status: string;
    url: string;
    slog: string;
    imgDestaque: string;
    imgCard: string;
    contador: number;
    autor: AutorDTO;
    comment: ComentarioDTO[];
    tag: ITags[];
    secao: ISecao;
    categorias: CategoriaDTO;
};