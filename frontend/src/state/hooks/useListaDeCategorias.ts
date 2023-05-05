import { useRecoilValue } from "recoil"
import { listaDeCategorias } from "../atom";

export const useListaDeCategorias = () => {
    return useRecoilValue(listaDeCategorias);
}