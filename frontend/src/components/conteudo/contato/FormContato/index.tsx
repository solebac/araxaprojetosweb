import React, { useEffect, useState } from "react";
import BotaoEnviar from "../BotaoEnviar";
import { BASE_URL_NEXT } from "../../../../utils/requests";

const FormContato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msg, setMsg] = useState("");
  const [contato, setContato] = useState("radio-whatsapp");
  const [receber, setReceber] = useState(false);
  const [visible, setVisible] = useState(true);
  //teste
  const [assunto, setAssunto] = useState("");
  const [radioWhatsapp, setRadioWhatsapp] = useState(true);
  const [radioTelefone, setRadioTelefone] = useState(false);
  const [radioEmail, setRadioEmail] = useState(false);

  useEffect(() => {
    setNome("");
    setEmail("");
    setTelefone("");
    setMsg("");
    setAssunto("");
    setContato("radio-whatsapp");
    setReceber(false);
    setVisible(true);
  }, []);

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    const nomeSobrenome = event.target.nomeSobrenome.value;

    const header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("Access", 'application/json"');
    header.append("Access-Control-Allow-Origin", "*");

    const rawResponse = await fetch(`${BASE_URL_NEXT}/api/sendjs`, {
      method: "POST",
      headers: header,
      body: JSON.stringify({
        nome,
        email,
        assunto,
        msg,
        telefone,
        radioEmail,
        radioTelefone,
        radioWhatsapp,
        receber,
      }),
    });
    const rest = await rawResponse.json();
    console.log(rest);
    console.log("--------------------------");
    console.log(rest.response);
  };
  const handleRadioChange = (event: any) => {
    /*Case: With Object.: 
    const { name, value } = event.target;
    setRadios({
      ...radios,
      [name]: value
    })*/
    //console.log(event.target.value);
    setContato(event.target.value);
  };
  return (
    <>
      <section className="container celling">
        <div className="contato contato--moon contato--resize">
          <legend className="contato__titulo">Fale conosco</legend>
          <legend className="contato__subtitulo">
            VocÃª pode esclarecer todas as suas dÃºvidas sobre produtos e
            serviÃ§os.
          </legend>
          <form
            className="contato__form"
            id="form-contact"
            onSubmit={handleFormSubmit}
          >
            <fieldset>
              <input
                onChange={(event) => {
                  setNome(event.target.value);
                }}
                type="text"
                name="nomeSobrenome"
                defaultValue={nome}
                className="contato__form--input-padrao"
                placeholder="Nome e sobrenome"
                required
              />
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                name="email"
                defaultValue={email}
                className="contato__form--input-padrao"
                required
                placeholder="seuemail@dominio.com"
              />
              <input
                onChange={(e) => {
                  setTelefone(e.target.value);
                }}
                type="tel"
                name="telefone"
                defaultValue={telefone}
                className="contato__form--input-padrao"
                required
                placeholder="(xx)xxxxx-xxxx"
              />

              <input
                onChange={(e) => {
                  setAssunto(e.target.value);
                }}
                type="text"
                name="assunto"
                defaultValue={assunto}
                className="contato__form--input-padrao"
                required
                placeholder="Assunto"
              />

              <label htmlFor="mensagem" className="contato__etiqueta">
                Mensagem
              </label>

              <textarea
                onChange={(event) => {
                  setMsg(event.target.value);
                }}
                name="mensagem"
                defaultValue={msg}
                rows={3}
                className="contato__form--input-padrao"
              ></textarea>

              <fieldset>
                <legend className="contato__etiqueta">
                  Como prefere o nosso contato?
                </legend>
                <label htmlFor="radio-email" className="contato__etiqueta">
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="contato"
                    value="radio-email"
                    checked={contato === "radio-email"}
                    placeholder="Email"
                  />
                  Email
                </label>
                <label htmlFor="radio-telefone" className="contato__etiqueta">
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="contato"
                    value="radio-telefone"
                    checked={contato === "radio-telefone"}
                    placeholder="Telfone"
                  />
                  Telefone
                </label>
                <label htmlFor="radio-whatsapp" className="contato__etiqueta">
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="contato"
                    value="radio-whatsapp"
                    checked={contato === "radio-whatsapp"}
                    placeholder="WhatsApp"
                  />
                  WhatsApp
                </label>
              </fieldset>

              <fieldset>
                <legend className="contato__etiqueta">
                  Qual horÃ¡rio prefere ser atendido?
                </legend>
                <select id="preferencial" name="preferencial">
                  <option value="1">ManhÃ£</option>
                  <option value="2">Tarde</option>
                  <option value="3">Noite</option>
                </select>
              </fieldset>

              <label className="checkboks contato__etiqueta" htmlFor="receber">
                <input
                  type="checkbox"
                  id="receber"
                  onChange={(event) => {
                    setReceber(event.target.checked);
                  }}
                />
                Gostaria de receber nossas novidades por email?
              </label>
              {visible ? <BotaoEnviar /> : ""}
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};
export default FormContato;
