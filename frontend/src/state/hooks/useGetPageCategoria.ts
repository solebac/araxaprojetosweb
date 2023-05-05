import { useRecoilValue } from "recoil";
import { setPageCategoria } from "../atom";


const useGetPageCategoria = () => {
    return useRecoilValue(setPageCategoria);
}
export default useGetPageCategoria;