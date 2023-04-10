import { Link } from "react-router-dom";
import { ICategoria } from "../../../../../interfaces/ICategoria";

type Props = {
  line: ICategoria;
};
const TbodyCategoria = ({ line }: Props) => {
  return (
    <tr>
      <td>{line.id}</td>
      <td>{line.nome}</td>
      <td>{line.descricao}</td>
      <td>
        <Link
          to={`/aplicationsys/categoria/visualizar/${line.id}`}
          style={{ marginRight: "1%" }}
          className="btn btn-custons btn-custons--default tip-top"
          data-original-title="Ver mais detalhes"
        >
          <i className="icon-eye-open"></i>
        </Link>
        <Link
          to={`/aplicationsys/categoria/editar/${line.id}`}
          style={{ marginRight: "1%" }}
          className="btn btn-info btn-custons btn-custons--info  tip-top"
          data-original-title="Editar Cliente"
        >
          <i></i>
        </Link>

        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
          }}
          role="button"
          data-toggle="modal"
          style={{ marginRight: "1%" }}
          className="btn btn-danger btn-custons btn-custons--danger tip-top"
          data-original-title="Excluir Cliente"
        >
          <i className="icon-remove icon-white"></i>
        </a>
      </td>
    </tr>
  );
};
export default TbodyCategoria;
