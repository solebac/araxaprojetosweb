import { IPostsTitle } from "../../../../../interfaces/IBlog";

type Props = {
  infor: IPostsTitle;
};

const Capa = ({ infor }: Props) => {
  return (
    <section className="capa">
      <div className="texto-capa">
        <div className="row">
          <div className="col-lg-12">
            <div className="bh-text bh-text--card">
              <h3 style={{ fontSize: "35px", fontWeight: "700" }}>
                {infor?.titulo}
                {/**<br />estate and construction forever */}
              </h3>
              <ul>
                <li>
                  by <span className="text--card">{infor?.authorName}</span>
                </li>
                <li>{infor?.publicacao}</li>
                <li>0 Comentários</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Capa;
