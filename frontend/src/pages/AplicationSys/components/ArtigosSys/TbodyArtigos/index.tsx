import { Link } from "react-router-dom";
import { Artigo } from "../../../../../types/artigo";
import { formatDate } from "../../../../../utils/convertDate";

type Props = {
  line: Artigo;
  autor: Object;
};

const TbodyArtigos = ({ line, autor }: Props) => {
  //console.log(Object.values(line.categorias)[1]);
  //console.log(line.categorias);
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
export default TbodyArtigos;
