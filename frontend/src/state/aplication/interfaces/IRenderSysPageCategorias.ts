import { ICategoria } from "../../../interfaces/ICategoria";
import { IPaginacao } from "../../../interfaces/IPaginacao";

export interface IRenderSysPageCategorias {
    categorias?: IPaginacao<ICategoria>;
    visible?: boolean;
    excluir?: (lineExcluir: ICategoria) => void;
}