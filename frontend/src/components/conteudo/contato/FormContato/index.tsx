import React from "react";
import BotaoEnviar from "../BotaoEnviar";

const FormContato = () => {
  return (
    <>
      <section className="container celling">
        <div className="contato contato--moon contato--resize">
          <legend className="contato__titulo">Fale conosco</legend>
          <legend className="contato__subtitulo">
            Você pode esclarecer todas as suas dúvidas sobre produtos e
            serviços.
          </legend>
          <form className="contato__form">
            <fieldset>
              <input
                type="text"
                id="nomeSobrenome"
                className="contato__form--input-padrao"
                placeholder="Nome e sobrenome"
                required
              />
              <input
                type="email"
                id="email"
                className="contato__form--input-padrao"
                required
                placeholder="seuemail@dominio.com"
              />
              <input
                type="tel"
                id="telefone"
                className="contato__form--input-padrao"
                required
                placeholder="(xx)xxxxx-xxxx"
              />
              <label htmlFor="mensagem" className="contato__etiqueta">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                id="mensagem"
                rows={3}
                className="contato__form--input-padrao"
              ></textarea>

              <fieldset>
                <legend className="contato__etiqueta">
                  Como prefere o nosso contato?
                </legend>
                <label htmlFor="radio-email" className="contato__etiqueta">
                  <input
                    type="radio"
                    name="contato"
                    value="email"
                    id="radio-email"
                    placeholder="Email"
                  />
                  Email
                </label>
                <label htmlFor="radio-telefone" className="contato__etiqueta">
                  <input
                    type="radio"
                    name="contato"
                    value="telefone"
                    id="radio-telefone"
                    placeholder="Telfone"
                  />
                  Telefone
                </label>
                <label htmlFor="radio-whatsapp" className="contato__etiqueta">
                  <input
                    type="radio"
                    name="contato"
                    value="whatsapp"
                    id="radio-whatsapp"
                    placeholder="WhatsApp"
                    checked
                  />
                  WhatsApp
                </label>
              </fieldset>

              <fieldset>
                <legend className="contato__etiqueta">
                  Qual horário prefere ser atendido?
                </legend>
                <select id="preferencial">
                  <option value="">Manhã</option>
                  <option value="">Tarde</option>
                  <option value="">Noite</option>
                </select>
              </fieldset>

              <label className="checkboks contato__etiqueta" htmlFor="receber">
                <input type="checkbox" id="receber" />
                Gostaria de receber nossas novidades por email?
              </label>
              <BotaoEnviar />
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};
export default FormContato;
