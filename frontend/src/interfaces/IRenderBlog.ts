import { IArtigo } from "./IArtigo";
import { IArtigoRecents } from "./IArtigoRecents";
import { IPaginacao } from "./IPaginacao";
//Inativo
export interface IRenderBlog {
    page?: IPaginacao<IArtigo>;
    destaque?: IArtigo;
    post?: IArtigoRecents[];
};