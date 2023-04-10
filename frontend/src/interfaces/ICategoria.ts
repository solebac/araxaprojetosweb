import { ISecao } from "./ISecao";

export interface ICategoria {
  id: number;
  nome: string;
  descricao: string;
  secao?: ISecao[];
};