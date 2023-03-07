import React from "react";
const ModalInfor = () => {
  return (
    <>
      <section className="container">
        <a
          className="btn btn-sm btn-info"
          href="#info"
          data-toggle="modal"
          id="btnInitial"
        >
          <i className="glyphicon glyphicon-eye-open"></i> InformaÃ§Ã£o
        </a>
        <div
          className="modal fade"
          id="info"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header modal-header-info">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  Ã—
                </button>
                <p>
                  <i className="glyphicon glyphicon-thumbs-up"></i> Aviso
                  importante...!
                </p>
              </div>
              <div className="modal-body">
                Aviso Legal: Lei 12.737/2012, Art. 154-A, CP <br />
                É crime, segundo o Código Penal Brasileiro:
                <br />
                É crime, segundo o Código Penal Brasileiro: Invadir dispositivo
                informático alheio, conectado ou não à rede de computadores,
                mediante violação indevida de mecanismo de segurança e com o fim
                de obter, adulterar ou destruir dados ou informações sem
                autorização expressa ou tácita do titular do dispositivo ou
                instalar vulnerabilidades para obter vantagem ilícita.
                <br />
                Pena – detenção, de 3 (três) meses a 1 (um) ano, e multa.
                <br />
                <a href="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm">
                  Lei Nº 12.737, de 30 de novembro de 2012.
                </a>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default pull-left"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ModalInfor;
