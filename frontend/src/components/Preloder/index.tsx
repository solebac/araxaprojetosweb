//import loading from "./assets/gifs/loads.gif";
import gifs from "../../data/gifs.json";

type IGifs = (typeof gifs)[0];

const Preloder = () => {
  const loading: IGifs = gifs[0];
  return (
    <>
      <div id="preloder">
        <img className="loader" src={loading.gifs} alt="Loading..." />
      </div>
    </>
  );
};

export default Preloder;
