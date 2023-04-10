import { IAutor } from "./IAutor";
import { ICategoria } from "./ICategoria";
import { IComentario } from "./IComentarios";
import { ISecao } from "./ISecao";
import { ITags } from "./ITag";

export interface IArtigo {
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
  autor: IAutor[];
  comment: IComentario[];
  tag: ITags[];
  secao: ISecao;
  categorias: ICategoria[];
}