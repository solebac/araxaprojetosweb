import { useRecoilValue } from "recoil"
import { artigosRecentsAsyncFamily } from "../seletores";

export const useListaArtigosRecents = (categoriaId: number) => {
    const data = useRecoilValue(artigosRecentsAsyncFamily(categoriaId));
    return data;
}