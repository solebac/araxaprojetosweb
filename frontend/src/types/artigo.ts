import { Autor } from "./autor";
import { Categoria } from "./categoria";
import { Comentario } from "./comentario";
import { Secao } from "./secao";
import { Tag } from "./tag";

//id: 1;
export type Artigo = {
  id: number;
  titulo: string;
  dataPublicacao: string;
  conteudo: string;
  status: string;
  url: string;
  contador: number;
  autor: Autor[];
  comment: Comentario[];
  tag: Tag[];
  secao: Secao[];
  categorias: Categoria[];
};
export type ArtigoPage = {
  id: number;
  titulo: number;
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
  autor: Autor[];
  comment: Comentario[];
  tag: Tag[];
  secao: Secao[];
  categorias: Categoria[];
}