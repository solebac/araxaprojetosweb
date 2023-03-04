import React from "react";

const Information = () => {
  return (
    <>
      <section className="container">
        <div className="row texto-servico">
          <div className="col-md-12">
            <p className="titulo-portifolio">Segurança da informação</p>
            <p className="subtitulo-portifolio subtitulo-portifolio--ethical">
              Se diz a respeito a proteção do conjunto de informações de um
              sistema e rege-se manter a integridade, disponibilidade,
              confidencialidade e autenticidade da informação que são as
              propriedades básicas da segurança da informação.
            </p>
          </div>

          <div className="col-md-6 card__ethical">
            <div className="card__ethical-item card__ethical-item--azure">
              <p className="subtitulo-portifolio">Integridade</p>
              <p className="text-portifolio texto-servico--modifield">
                É o ato de manter a informação intacta sem nenhuma alteração e
                algum sistema ou pessoa não autorizada.
              </p>
            </div>
            <div className="card__ethical-item card__ethical-item--azure">
              <p className="subtitulo-portifolio">Disponibilidade</p>
              <p className="text-portifolio texto-servico--modifield">
                A informação sempre tem que está disponível para quem tem
                autorização.
              </p>
            </div>
          </div>

          <div className="col-md-6 card__ethical">
            <div className="card__ethical-item card__ethical-item--azure">
              <p className="subtitulo-portifolio">Confidencialidade</p>
              <p className="text-portifolio texto-servico--modifield">
                A informação não estará disponível para entidade não autorizado.
                <br />
              </p>
            </div>
            <div className="card__ethical-item card__ethical-item--azure">
              <p className="subtitulo-portifolio">Autenticidade</p>
              <p className="text-portifolio texto-servico--modifield">
                Proteger a informação com algum tipo de mecanismo de
                autenticação usando uma senha por exemplo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Information;
