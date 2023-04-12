import { Link } from "react-router-dom";
import { IAutor } from "../../../../../interfaces/IAutor";

type Props = {
  line: IAutor;
  excluir: (lineExcluir: IAutor) => void;
};

const TbodyAutor = ({ line, excluir }: Props) => {
  return (
    <>
      <tr>
        <td>{line.id}</td>
        <td>{line.nome}</td>
        <td>{line.email}</td>
        <td>
          <Link
            to={`/aplicationsys/autor/visualizar/${line?.id}`}
            style={{ marginRight: "1%" }}
            className="btn btn-custons btn-custons--default tip-top"
            data-original-title="Ver mais detalhes"
          >
            <i></i>
          </Link>

          <Link
            to={`/aplicationsys/autor/editar/${line.id}`}
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
export default TbodyAutor;
