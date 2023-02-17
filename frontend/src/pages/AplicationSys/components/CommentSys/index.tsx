import TbodyComments from "./TbodyComments";

const CommentSys = () => {
  return (
    <>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-categoria">
            <i></i>
          </span>
          <h5>Comentários por artigos</h5>
        </div>

        <div className="widget-content nopadding">
          <table className="table table-bordered data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Artigo</th>
                <th>Autor</th>
                <th>Data Publicação</th>
                <th>Qt.Comments</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <TbodyComments />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default CommentSys;
