import { Autor } from "./autor";
import { Categoria } from "./categoria";
import { Comentario } from "./comentario";
import { Tag } from "./tag";

export type Artigo = {
  id: 1;
  titulo: string;
  dataPublicacao: string;
  conteudo: string;
  status: string;
  url: string;
  contador: number;
  autor: Autor[];
  comment: Comentario[];
  tag: Tag[];
  categorias: Categoria[];
};
