import React from "react";

const BannerMidde = () => {
  return (
    <>
      <div className="attack__banner">
        <iframe
          title="Teste a velocidade da sua internet aqui...!"
          width="100%"
          height="250"
          src="https://fast.com/pt"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
export default BannerMidde;
