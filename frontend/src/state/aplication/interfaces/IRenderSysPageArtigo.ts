import { IArtigo } from "../../../interfaces/IArtigo";
import { IPaginacao } from "../../../interfaces/IPaginacao";

export interface IRenderSysPageArtigo {
    artigos?: IPaginacao<IArtigo>;
    visible?: boolean;
    excluir?: (lineExcluir: IArtigo) => void
};