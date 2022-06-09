import React from "react";

const Mapa = () => {
  return (
    <main>
      <section className="container">
        <div className="contato contato--moon">
          <p className="contato__titulo">My Address</p>
          <div className="contato__mapa--conteudo">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.199288269661!2d-46.94871608598616!3d-19.575960986803025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0372c7876c039%3A0xf5deb822bdc09038!2sR.%20Geni%20da%20Silva%20Botelho%2C%2075%20-%20Novo%20S%C3%A3o%20Geraldo%2C%20Arax%C3%A1%20-%20MG%2C%2038180-139!5e0!3m2!1spt-BR!2sbr!4v1653749749944!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              loading="lazy" title="Onde me encontrar"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mapa;
