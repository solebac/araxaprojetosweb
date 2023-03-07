import { Secao } from "./secao";

export type Categoria = {
  id: number;
  nome: string;
  descricao: string;
  secao: Secao[];
};
export type CategoriaPage = {
  content: Categoria[],
  last: boolean,
  totalPages: number,
  totalElements: number,
  size: number,
  number: number,
  first: boolean,
  numberOfElements: number,
  empty: boolean,
}