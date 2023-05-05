import { IArtigo } from "./IArtigo";
import { IPaginacao } from "./IPaginacao";

export interface IRenderPortifolio {
    page: IPaginacao<IArtigo>;
    visible: boolean;
};