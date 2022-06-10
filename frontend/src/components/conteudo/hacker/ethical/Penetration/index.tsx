import React from "react";

const Penetration = () => {
  return (
    <>
      <section className="landscape">
        <section className="container">
          <div className="row texto-servico">
            <div className="col-md-12">
              <p className="titulo-portifolio">Penetration Test</p>
              <p className="subtitulo-portifolio subtitulo-portifolio--ethical">
                É a relação entre a chance e o impacto da ameaça acontecer. Um
                Penetration Test (PenTest) permite a organização realizar uma
                fotografia de cyber segurança de seu ambiente (infraestrutura,
                aplicação web, aplicativo mobile).
              </p>
            </div>

            <div className="mb-1">
              <div className="col-lg-12">
                <p className="subtitulo-portifolio subtitulo-portifolio--ethical">
                  Tipos de Pentest
                </p>
              </div>
              <div className="col-md-6 card__ethical">
                <div className="card__ethical-item card__ethical-item--bisque">
                  <p className="subtitulo-portifolio">Blind</p>
                  <p className="text-portifolio texto-servico--modifield">
                    Blind, do inglês significa "cego" nesse teste o auditor não
                    sabe de nada sobre o algo que irá atacar, como faria um
                    criminoso com nenhum conhecimento prévio ou acessos de seu
                    alvo.
                  </p>
                </div>
                <div className="card__ethical-item card__ethical-item--bisque">
                  <p className="subtitulo-portifolio">Gray Box</p>
                  <p className="text-portifolio texto-servico--modifield">
                    Conhecido como "Teste de Caixa Cinza" o auditor sabe de
                    forma parcial o alvo e o alvo sabe que será atacado porém
                    contudo sabe quais testes serão realizados.
                  </p>
                </div>
              </div>

              <div className="col-md-6 card__ethical">
                <div className="card__ethical-item card__ethical-item--bisque">
                  <p className="subtitulo-portifolio">Tandem</p>
                  <p className="text-portifolio texto-servico--modifield">
                    Conhecido como "Caixa de Cristal" o auditor sabe muito sobre
                    o alvo e o alvo sabe que será atacado, ou seja, é análogo ao
                    Blind e o Reversal ao Double-Blind.
                    <br />
                  </p>
                </div>
                <div className="card__ethical-item card__ethical-item--bisque">
                  <p className="subtitulo-portifolio">Reversal</p>
                  <p className="text-portifolio texto-servico--modifield">
                    É uma equipe de respostas a incidentes, basicamente o
                    auditor sabe de tudo do alvo e o alvo não sabe que será
                    atacado e quais testes será realizado.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-1">
              <p className="subtitulo-portifolio subtitulo-portifolio--ethical">
                Aspectos Legais
              </p>
              <ul className="chec-radio">
                <li className="pz">
                  <label className="radio-inline">
                    <input
                      type="checkbox"
                      id="pro-chx-residential"
                      name="gas_availability"
                      className="pro-chx"
                      value="yes"
                      checked
                    />
                    <div className="clab">Limites do teste</div>
                  </label>
                </li>
                <li className="pz">
                  <label className="radio-inline">
                    <input
                      type="checkbox"
                      id="pro-chx-residential"
                      name="electricity_availability"
                      className="pro-chx"
                      value="yes"
                    />
                    <div className="clab">Horários</div>
                  </label>
                </li>
                <li className="pz">
                  <label className="radio-inline">
                    <input
                      type="checkbox"
                      id="pro-chx-residential"
                      name="phone_internet"
                      className="pro-chx"
                      value="yes"
                    />
                    <div className="clab">Equipe de suporte</div>
                  </label>
                </li>
                <li className="pz">
                  <label className="radio-inline">
                    <input
                      type="checkbox"
                      id="pro-chx-residential"
                      name="water_availability"
                      className="pro-chx"
                      value="yes"
                    />
                    <div className="clab">Contatos</div>
                  </label>
                </li>
                <li className="pz">
                  <label className="radio-inline">
                    <input
                      type="checkbox"
                      id="pro-chx-residential"
                      name="sanitation"
                      className="pro-chx"
                      value="yes"
                    />
                    <div className="clab">Permissão assinada</div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Penetration;
