import { IArtigo } from "./IArtigo";

export interface IRenderBlogDispache {
    page: IArtigo[];
    destaque: IArtigo;
    visible: boolean;
    isDestaque: boolean;
};