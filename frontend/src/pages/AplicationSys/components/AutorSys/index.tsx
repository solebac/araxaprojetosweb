import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IAutor } from "../../../../interfaces/IAutor";
import { IPaginacao } from "../../../../interfaces/IPaginacao";
import { getAutoresPage } from "../../../../services/Autor.services";
import http from "../../../../utils/http";
import ControlPage from "../ControlPage";
import TbodyAutor from "./TbodyAutor";

const AutorSys = () => {
  const [line, setLine] = useState<IPaginacao<IAutor>>();
  const [pageNumber, setPageNumber] = useState(0);
  const handlerPageNumber = (newPager: number) => {
    setPageNumber(newPager);
  };
  const [status, setStatus] = useState(0);
  useEffect(() => {
    if (!(status === 404)) {
      getAutoresPage(setLine, pageNumber);
    } else {
      toast.warning(
        "Registro não pode ser removido, pois possui referencia com outros registros...!"
      );
    }
    setStatus(0);
  }, [pageNumber, status]);
  const excluir = (lineExcluir: IAutor) => {
    http
      .delete(`autor/${lineExcluir.id}`, {
        validateStatus(status) {
          return (status >= 200 && status < 300) || status === 404;
        },
      })
      .then((resp) => {
        setStatus(resp.status);
        if (resp.status === 204) {
          toast.success("Registro removido com sucesso...!");
        }
      })
      .catch((error) => console.error(error));
  };
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
                return (
                  <TbodyAutor
                    key={autor.id}
                    line={autor}
                    excluir={() => excluir(autor)}
                  />
                );
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
