import { useRecoilValue, useSetRecoilState } from "recoil";
import { IArtigo } from "../../interfaces/IArtigo";
import { IAutor } from "../../interfaces/IAutor";
import { ICategoria } from "../../interfaces/ICategoria";
import { IFiltrosPagination } from "../../interfaces/IFiltrosPagination";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { statesPagination } from "../../utils/pagination";
import { filtroPaginationState } from "../atom";

interface IPagination {
    page: IPaginacao<IArtigo> | IPaginacao<ICategoria> | IPaginacao<IAutor>;
    handlerPageNumber: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPager: number) => void;
}

export function usePagination<T = unknown>(etapaAtual: number): IPagination {
    const page = useRecoilValue<
        IPaginacao<IArtigo> | IPaginacao<ICategoria> | IPaginacao<IAutor>
    >(statesPagination[etapaAtual]);

    const setFiltrosPagination = useSetRecoilState<IFiltrosPagination>(
        filtroPaginationState
    );

    const handlerPageNumber = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        newPager: number
    ) => {
        e.preventDefault();
        const filtro: IFiltrosPagination = {};
        filtro.paginas = newPager;
        setFiltrosPagination(filtro);
    }
    return { page, handlerPageNumber };
}