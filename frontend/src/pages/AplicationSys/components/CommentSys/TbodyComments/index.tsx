const comments = {
  id: 1,
  dataHora: "20/01/2021",
  nome: "Flavio Rogerio",
  texto: "Lorem Ipsum em desenvolvimento",
  contador: 0,
  artigo: "Ações e Reações da Água" /**dever ser uma [] */,
};

const TbodyComments = () => {
  return (
    <>
      <tr>
        <td>{comments.id}</td>
        <td>{comments.artigo}</td>
        <td>{comments.nome}</td>
        <td>{comments.dataHora}</td>
        <td>{comments.contador}</td>
        <td>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{ marginRight: "1%" }}
            className="btn btn-custons btn-custons--default tip-top"
            data-original-title="Ver mais detalhes"
          >
            <i className="icon-eye-open"></i>
          </a>
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
export default TbodyComments;
