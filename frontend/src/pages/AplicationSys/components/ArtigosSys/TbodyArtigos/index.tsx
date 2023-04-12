import { Link } from "react-router-dom";
import { IArtigo } from "../../../../../interfaces/IArtigo";
import { formatDate } from "../../../../../utils/convertDate";

type Props = {
  line: IArtigo;
  autor: Object;
  excluir: (lineExcluir: IArtigo) => void;
};

const TbodyArtigos = ({ line, autor, excluir }: Props) => {
  return (
    <>
      <tr>
        <td>{line?.id}</td>
        <td>{Object.values(autor)[1]}</td>
        <td>{line?.titulo}</td>
        <td>{`${Object.values(line.categorias)[1]}`}</td>
        <td>{formatDate(line?.dataPublicacao)}</td>
        <td>{line?.status}</td>
        <td>
          <Link
            to={`/aplicationsys/posts/visualizar/${line?.id}`}
            style={{ marginRight: "1%" }}
            className="btn btn-custons btn-custons--default tip-top"
            data-original-title="Ver mais detalhes"
          >
            <i className="icon-eye-open"></i>
          </Link>
          <Link
            to={`/aplicationsys/posts/editar/${line?.id}`}
            style={{ marginRight: "1%" }}
            className="btn btn-info btn-custons btn-custons--info  tip-top"
            data-original-title="Editar Cliente"
          >
            <i></i>
          </Link>

          <button
            onClick={() => excluir(line)}
            style={{ marginRight: "1%" }}
            className="btn btn-danger btn-custons btn-custons--danger tip-top"
            data-original-title="Excluir Cliente"
          >
            <i className="icon-remove icon-white"></i>
          </button>
        </td>
      </tr>
    </>
  );
};
export default TbodyArtigos;
