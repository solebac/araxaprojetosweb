import { useEffect, useState } from "react";
import Pagination from "../../../../components/Pagination";
import { IArtigo } from "../../../../interfaces/IArtigo";
import { IAutor } from "../../../../interfaces/IAutor";
import { ICategoria } from "../../../../interfaces/ICategoria";
import { IPaginacao } from "../../../../interfaces/IPaginacao";

type Props = {
  page:
    | IPaginacao<IArtigo>
    | IPaginacao<IAutor>
    | IPaginacao<ICategoria>
    | undefined;
  onChange: Function;
};
const ControlPage = ({ page, onChange }: Props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (page && page?.totalPages > 1) {
      setVisible(true);
    }
  }, [page?.totalPages]);
  return <>{visible ? <Pagination page={page} onChange={onChange} /> : ""}</>;
};

export default ControlPage;
