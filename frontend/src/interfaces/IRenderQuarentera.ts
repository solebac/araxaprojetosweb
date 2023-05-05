import { IArtigo } from "./IArtigo";
import { IPaginacao } from "./IPaginacao";

export interface IRenderQuarentera {
    page: IPaginacao<IArtigo>;
    visible: boolean;
};