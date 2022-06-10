import * as React from "react";
import imgBoss from "../../../../assets/img/home/img-boss.jpg";
import imgSearch from "../../../../assets/img/home/img-search.jpg";
import imgInstitu from "../../../../assets/img/home/img-institu.jpg";
import imgDash from "../../../../assets/img/home/img-dash.jpg";

const Portifolio = () => {
  return (
    <>
      <section className="landscape">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row albuns">
                <div className="col-md-6">
                  <img
                    src={imgBoss}
                    className="img-responsive img-transform"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={imgSearch}
                    className="img-responsive img-transform"
                    alt=""
                  />
                </div>
              </div>
              <div className="row albuns">
                <div className="col-md-6">
                  <img
                    src={imgInstitu}
                    className="img-responsive img-transform"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={imgDash}
                    className="img-responsive img-transform"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 texto-servico">
              <p className="titulo-portifolio">O que Araxá Projetos Web tem?</p>
              <p className="subtitulo-portifolio">Sites Instituionais</p>
              <p className="text-portifolio texto-servico--modifield">
                Site institucional é o endereço da sua empresa na web, onde seu
                negócio é representado em páginas virtuais que promovem sua
                marca, seus produtos e seus serviços. Sua função é concentrar
                todas as informações importantes sobre a empresa, além de atrair
                clientes, oferecer atendimento e fortalecer o branding.
              </p>
              <p className="subtitulo-portifolio">Control Center Plus</p>
              <p className="text-portifolio texto-servico--modifield">
                Um Painel de Controle (CCP) nada mais é que um sistema que pode
                ser configurado junto com o site da sua empresa. Você pode
                acessá-lo de qualquer lugar e com qualquer dispositivo, porque o
                sistema é online e responsivo. A partir de um desktop ou de um
                smartphone, você consegue manter o seu site sempre atualizado.
              </p>
              <p className="subtitulo-portifolio">
                Programas customizados para Web
              </p>
              <p className="text-portifolio texto-servico--modifield">
                Seu endereço está na web e você quer algo mais, como vender,
                entregar ou informar. Todo esse conteúdo aninhado com a sua
                regra de negócio, pelo contrário, são a parte do site que os
                usuários não podem ver e interagir. Você transforma sua marca em
                facilidade para entregar algo mais como vendas, delivery ou
                informação, desta forma ofereço plataformas baseadas em
                controles como sistemas customizados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Portifolio;
