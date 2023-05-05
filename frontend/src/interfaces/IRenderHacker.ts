import { IArtigo } from "./IArtigo";
import { IArtigoRecents } from "./IArtigoRecents";
import { IPaginacao } from "./IPaginacao";
import { ISecaoCategoria } from "./ISecao";

export interface IRenderHacker {
    page: IPaginacao<IArtigo>;
    recents: IArtigoRecents[];
    secao: ISecaoCategoria[];
    visible: boolean;
};