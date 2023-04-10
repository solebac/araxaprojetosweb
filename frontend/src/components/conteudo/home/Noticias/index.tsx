import { IPostsNews } from "../../../../interfaces/IBlog";
import Postagens from "./Postagens";
type Props = {
  news: IPostsNews[];
};
const Noticias = ({ news }: Props) => {
  return (
    <>
      <article className="landscape landscape--news">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Ultimas notícias</h2>
              <dl className="dl-unsur" style={{ width: "100%" }}>
                {news?.map((noticias, index) => {
                  return (
                    <Postagens key={index} count={index} news={noticias} />
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default Noticias;
