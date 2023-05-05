import { useRecoilValue } from "recoil";
import { artigosAsyncFamily } from "../seletores";

//Hook com retorno dos dados
const usePaginationArtigos = (categoriaId: number) => {
    const data = useRecoilValue(artigosAsyncFamily(categoriaId));
    return data;
}
export default usePaginationArtigos;