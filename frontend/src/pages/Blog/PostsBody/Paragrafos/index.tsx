import { BASE_URL } from "../../../../utils/requests";
import imgSemFoto from "../../../../assets/img/blog/blog-1.jpg";

type Props = {
  texto: string;
  style: string;
  paths?: string;
  imgs: boolean;
  quarentena?: number | undefined;
};
const Paragrafos = ({
  texto,
  style,
  paths,
  imgs = false,
  quarentena = 0,
}: Props) => {
  return (
    <>
      {!imgs ? (
        <div className={style}>
          <p className="blog">{texto}</p>
        </div>
      ) : (
        <div className="bc-details">
          <div className="bc-text">
            <img
              src={
                paths !== ""
                  ? quarentena === 4
                    ? `${BASE_URL}/articles/paint/quarentena/${paths}`
                    : `${BASE_URL}/articles/paint/${paths}`
                  : imgSemFoto
              }
              alt="SEM IMAGEM"
              className="bc-pic img-responsive img-blogdestaque"
            />
            <p className="blog">{texto}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Paragrafos;
