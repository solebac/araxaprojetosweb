import React from "react";
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
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Vancouver real estate advisurges conference goers...
            </a>
          </h6>
          <span>Seb 24, 2019</span>
        </div>
      </article>
    </>
  );
};
export default RecentPostCard;
