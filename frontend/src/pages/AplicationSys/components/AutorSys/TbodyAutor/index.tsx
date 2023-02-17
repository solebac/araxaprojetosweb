import { Link } from "react-router-dom";
import { Autor } from "../../../../../types/autor";

type Props = {
  line: Autor;
};

const TbodyAutor = ({ line }: Props) => {
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
    </>
  );
};
export default TbodyAutor;
