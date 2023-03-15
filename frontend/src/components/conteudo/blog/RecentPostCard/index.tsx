import { Link } from "react-router-dom";
import imgTest01 from "../../../../assets/img/blog/panel-test.jpg";

const RecentPostCard = () => {
  return (
    <>
      <article className="rp-item">
        <div className="rp-pic">
          <img src={imgTest01} alt="" />
        </div>
        <div className="rp-text">
          <h6>
            <Link
              to="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Vancouver real estate advisurges conference goers...
            </Link>
          </h6>
          <span>Seb 24, 2019</span>
        </div>
      </article>
    </>
  );
};
export default RecentPostCard;
