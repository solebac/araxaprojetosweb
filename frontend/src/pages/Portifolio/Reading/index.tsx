import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo2 from "../../../assets/img/logo/logo-02.png";
//import semImagem from "../../../assets/img/blog/reading/yoda02.png";
import photos from "../../../data/photo.json";
import Footers from "../../../components/Footers";
import "./styles.css";
import { useEffect, useState } from "react";
import { getPortiforioUrl } from "../../../services/Blog.services";
import { clearArroba } from "../../../utils/tools";
import { IArtigo } from "../../../interfaces/IArtigo";
import { ResetArtigo } from "../../../interfaces/reset";

const Reading = () => {
  const [artigo, setArtigo] = useState<IArtigo>(ResetArtigo);
  const { url } = useParams();
  const navigate = useNavigate();
  console.log(url);
  const menu = [
    { label: "Portifólio", to: "/portifolio" },
    { label: "Sobre", to: "/portifolio/about" },
  ];
  const novo = photos.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
  useEffect(() => {
    getPortiforioUrl(setArtigo, url);
  }, []);
  const post = clearArroba(artigo);
  return (
    <>
      <section className="read__body">
        <nav className="read__nav">
          <Link to="/">
            <img
              src={logo2}
              alt="Araxa Projetos Web"
              onClick={() => navigate("/")}
            />
          </Link>
          <ul className="read__ul">
            {menu.map((item, index) => (
              <li key={index} className="read__li">
                <Link to={item.to} className="read__href">
                  {item.label}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </nav>
        <main className="read__container">
          <div className="read__tipografia">
            <p className="read__tipografia--titulo read__bottom read__top">
              {artigo.titulo}
            </p>
            <div className="read__banner read__bottom">
              <img src={novo.img} alt="Animação" className="read__img" />
            </div>
            {post?.map((texto, index) => (
              <article key={index}>
                <p className="read__tipografia--paragrafo">{texto}</p>
              </article>
            ))}
            <button
              onClick={() => navigate(-1)}
              className="read__prev read__prev--radius read__top read__bottom"
            >
              {"< Voltar"}
            </button>
          </div>
        </main>
      </section>
      <Footers />
    </>
  );
};
export default Reading;
