import { useRecoilValue } from "recoil";
import { setArtigosDestaque } from "../atom";

const useGetArtigoDestaque = () => {
    return useRecoilValue(setArtigosDestaque);
}
export default useGetArtigoDestaque;