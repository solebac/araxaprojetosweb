import { Secao } from "./secao";

export type Categoria = {
  id: number;
  nome: string;
  descricao: string;
  secao: Secao[];
};
