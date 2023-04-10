import { Link } from "react-router-dom";
import { IArtigo } from "../../../../../interfaces/IArtigo";
import { formatDate } from "../../../../../utils/convertDate";

type Props = {
  line: IArtigo;
  autor: Object;
};
const TbodyListPost = ({ line, autor }: Props) => {
  return (
    <>
      <tr>
        <td>{line?.id}</td>
        <td>{line?.titulo}</td>
        <td>{formatDate(line?.dataPublicacao)}</td>
        <td>{line?.status}</td>
        <td>
          <Link
            to={`/aplicationsys/posts/editar/${line?.id}`}
            style={{ marginRight: "1%" }}
            className="btn btn-info btn-custons btn-custons--info  tip-top"
            data-original-title="Editar Cliente"
          >
            <i></i>
          </Link>
        </td>
      </tr>
    </>
  );
};
export default TbodyListPost;
