import { IArtigo } from "../../../interfaces/IArtigo";
import { ICategoria } from "../../../interfaces/ICategoria";
import { IPaginacao } from "../../../interfaces/IPaginacao";

export interface IRenderSysPageMain {
    artigos?: IPaginacao<IArtigo>;
    categorias?: ICategoria[];
    visible?: boolean;
    setSelectCategoria?: React.Dispatch<React.SetStateAction<ICategoria | null>>;
};