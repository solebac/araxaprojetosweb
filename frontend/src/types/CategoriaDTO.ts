import { ISecao } from "../interfaces/ISecao";

export type CategoriaDTO = {
    id: number;
    nome: string;
    descricao: string;
    secao?: ISecao[];
};

export const TResetCategoria: CategoriaDTO = {
    id: 0,
    nome: "",
    descricao: "",
}