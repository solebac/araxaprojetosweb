import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAutor } from "../../../../interfaces/IAutor";
import { IPaginacao } from "../../../../interfaces/IPaginacao";
import { getAutoresPage } from "../../../../services/Autor.services";
import ControlPage from "../ControlPage";
import TbodyAutor from "./TbodyAutor";

const AutorSys = () => {
  const [line, setLine] = useState<IPaginacao<IAutor>>();
  const [pageNumber, setPageNumber] = useState(0);
  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };
  useEffect(() => {
    getAutoresPage(setLine, pageNumber);
  }, [pageNumber]);
  return (
    <>
      <Link
        to="/aplicationsys/autor/adicionar"
        className="btn btn-success btn-custons btn-custons--success"
      >
        <i></i> Adicionar Autor
      </Link>
      <div className="widget-box">
        <div className="widget-title">
          <span className="icon icon-user">
            <i></i>
          </span>
          <h5>Autor</h5>
        </div>

        <div className="widget-content nopadding">
          <table className="table table-bordered data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {line?.content.map((autor) => {
                return <TbodyAutor key={autor.id} line={autor} />;
              })}
            </tbody>
          </table>
          {/**Ponto  components ControlPage */}
          <ControlPage page={line} onChange={handlerPageNumber} />
        </div>
      </div>
    </>
  );
};
export default AutorSys;

/*
    * Exemplo Manual
    axios
      .get<Autor[]>(`${BASE_URL}/autor`, {
        auth: {
          username: "lucas@hotmail.com",
          password: "123",
        },
      })
      .then((res) => {
        setLine(res.data);
      });*/
