import React from "react";

const Introdution = () => {
  return (
    <>
      <section className="container mb-1">
        <div className="row texto-servico">
          <div className="col-md-12">
            <p className="titulo-portifolio mt-1">Introdução</p>
          </div>
          <div className="col-md-6">
            <p className="subtitulo-portifolio">Hacker</p>
            <p className="text-portifolio texto-servico--modifield">
              É um cara do bem que usa seu conhecimento para identificar falhas
              em um sistema.
            </p>
            <p className="subtitulo-portifolio">Cracker</p>
            <p className="text-portifolio texto-servico--modifield">
              É o cara do mal que usa o seu conhecimento de forma legal e sem
              ética para comprometer a informação, de forma a roubá-la ou
              alterá-las para depois vender ou até mesmo invadir as contas
              pessoais de algumas pessoas e comprometer o sistema.
            </p>
            <p className="subtitulo-portifolio">Práticas Legais e Ilegais</p>
            <p className="text-portifolio texto-servico--modifield">
              1. Você pode invadir qualquer sistema ou qualquer aparelho
              mediante autorização do dono. <br />
              2. É ilegal você invadir qualquer sistema ou qualquer aparelho
              mediante a não autorização do dono, ou seja, invadir um sistema
              sem autorização de alguém é considerado crime.
              <br />
            </p>
          </div>

          <div className="col-md-6">
            <p className="subtitulo-portifolio">Lei Carolina Dieckmann</p>
            <p className="text-portifolio texto-servico--modifield">
              A
              <a
                href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2012/Lei/L12737.htm"
                target="_blank" rel="noopener noreferrer"
                className="attack__hiperlink"
              >
                Lei Nº 12.737/2012
              </a>
              é uma alteração no Código Penal Brasileiro voltada para crimes
              virtuais e delitos informáticos. Com o avanço da tecnologia e a
              democratização e o acesso facilitado às redes sociais, o sistema
              judiciário brasileiro viu a necessidade de tipificar crimes
              cometidos no ambiente virtual. Seu projeto foi apresentado no dia
              29 de novembro de 2011 e sua sanção se deu em 2 de dezembro de
              2012 pela presidente Dilma Rousseff. Esse foi o primeiro texto que
              tipificou os crimes cibernéticos, tendo foco nas invasões a
              dispositivos que acontecem sem a permissão do proprietário. Vale
              destacar que, em nosso país, é comum as leis levarem anos para
              serem aprovadas, mas, nesse episódio, ela foi sancionada por conta
              da pressão midiática após uma ocorrência com a personalidade
              famosa — o que fez com que seu processo de aprovação demorasse o
              período recorde de apenas um ano.
            </p>
            <p className="small pull-left">
              <span className="glyphicon glyphicon-time"></span> Fonte.:
              <a
                href="https://fmp.edu.br/lei-carolina-dieckmann-voce-sabe-o-que-essa-lei-representa/"
                className="attack__hiperlink"
              >
                FMP
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Introdution;
