import React from "react";

const BannerFast = () => {
  return (
    <>
      <aside className="container mb-4">
        <div className="row">
          <div className="col-lg-12">
            <aside className="card__top">
              <iframe
                title="Teste a velocidade da sua internet aqui...!"
                width="100%"
                height="250"
                src="https://fast.com/pt"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </aside>
          </div>
        </div>
      </aside>
    </>
  );
};
export default BannerFast;
