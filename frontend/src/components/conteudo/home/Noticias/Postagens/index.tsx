import { Link } from "react-router-dom";
import { IPostsNews } from "../../../../../interfaces/IBlog";
type Props = {
  count: number;
  news: IPostsNews;
};
const Postagens = ({ count, news }: Props) => {
  return (
    <>
      <dd>
        <Link to={`/blog/posts/${news?.url}`} className="pull-left">
          <h2 className="pull-right">{count + 1}</h2>
          <div className="pull-left">
            <p className="text-portifolio texto-servico--modifield">
              {news?.titulo}
            </p>
          </div>
        </Link>
        <p className="small pull-left">
          <span className="glyphicon glyphicon-time"></span>{" "}
          {news.data_publicacao}
        </p>
      </dd>
    </>
  );
};
export default Postagens;
