import { IAutor } from "../../../interfaces/IAutor";
import { IPaginacao } from "../../../interfaces/IPaginacao";

export interface IRenderSysPageAutores {
    autores?: IPaginacao<IAutor>;
    visible?: boolean;
    excluir?: (lineExcluir: IAutor) => void;
}