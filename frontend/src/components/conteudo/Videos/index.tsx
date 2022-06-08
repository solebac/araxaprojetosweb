import * as React from "react";
const Videos = () => {
  return (
    <>
      <article id="video">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/ItIg4adjzwY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="480px"
            frameBorder="0"
          ></iframe>
        </div>
      </article>
    </>
  );
};
export default Videos;
