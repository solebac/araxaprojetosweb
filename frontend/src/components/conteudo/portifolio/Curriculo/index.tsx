import React from "react";

const Curriculo = () => {
  return (
    <>
      <aside className="col-md-8 portifolio-blog">
      <div className="row about__cabecalho">
            <div className="col-md-12">
              <p className="portifolio__name">Um pouco sobre minha carreira...</p> 
            </div>
          </div>
          

          <div className="row">
            <div className="col-md-12">
              
             <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
               <div className="panel panel-default">
                 <div className="panel-heading" role="tab" id="headingOne">
                   <h4 className="panel-title">
                     <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       Sobre
                     </a>
                   </h4>
                 </div>
                 <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                   <div className="panel-body">

                    <div className="about__cabecalho--modifield portifolio__border-unset" >
                      <p className="about__titulo"></p>
                      <p className="about__text">
                        Bacharel em Sistemas de Informação pelo UNIARAXÁ – Centro Universitário do Planalto de Araxá, 20 anos de experiência profissional em Linux, analise e desenvolvimento de software.
                      </p>
                      <p className="about__text">
                        Desenvolvimento de soluções em automação como ERP Conector e ConectorPDV.
                      </p>
					  <p className="about__text">
                        Desenvolvimento do projeto web: <pre>https://araxaprojetosweb.com.br</pre>
                      </p>
                      <p className="about__text">
                        Embora tenha me especializado em administração de sistemas Linux, sou um profissional com perfil generalista e estou constantemente estudando as diversas outras áreas envolvidas no processo de desenvolvimento de software, tais como: back-end e frontend na liguagem Java.
                      </p>
                      <p className="about__text">
                        Hoje possuo as competências necessárias para atuar como:
                      </p>
                       <ul className="about_infor">
                         <li className="about_infor-link">• Administrador de Redes Linux</li>
                         <li className="about_infor-link">• Desenvolvedor Back-end Java | Spring Boot</li>
                         <li className="about_infor-link">• Desenvolvedor Frontend React | NextJs | TypeScript</li>
                         <li className="about_infor-link">• Metodológia de projeto: Design Pattern GoF</li>
                         <li className="about_infor-link">• Líder Técnico</li>
						 <li className="about_infor-link">• Certificado Google Project Management (PT) Specialization</li>
                       </ul>
                       <p className="about__text">
                          Atualmente atuo em desenvolvimento customizado de REST API, sites e aplicativos web, além de sempre me atualizar quanto às tecnologias: Java, Spring Boot, React, Nodes e TypeScript.
                      </p>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="panel panel-default">
                 <div className="panel-heading" role="tab" id="headingTwo">
                   <h4 className="panel-title">
                     <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Experiência(s)
                     </a>
                   </h4>
                 </div>
                 <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                   <div className="panel-body">
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Analista de desenvolvimento de software</p>
                      <p className="about__subtitulo">FAT AUTOMAÇÃO</p>
                      <p className="about__legend">nov de 2012 - fev de 2022 · 9 anos 4 mesesnov de 2012 - fev de 2022 · 9 anos 4 meses
                       Araxá e Região, Brasil</p>
                       <ul className="about_infor">
                         <li className="about_infor-link">Desenvolvimento de Aplicativos Comerciais interligados a impressoras fiscais e SAT.</li>
                         <li className="about_infor-link">Analista de Desenvolvimento de Sistemas.</li>
                         <li className="about_infor-link">Analista de Banco de Dados MySQL.</li>
                         <li className="about_infor-link">Além de homologar softwares junto à receita estadual e federal de acordo com os layout’s do governo.</li>
                       </ul>
                     </div>

                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Gerente de TI</p>
                      <p className="about__subtitulo">Kamel Magazine</p>
                      <p className="about__legend">jun de 2002 - ago de 2011 · 9 anos 3 mesesjun de 2002 - ago de 2011 · 9 anos 3 meses
                        Araxá e Região, Brasil</p>
                       <ul className="about_infor">
                         <li className="about_infor-link">Gerente de TI.</li>
                         <li className="about_infor-link">Administrador de Rede Linux.</li>
                         <li className="about_infor-link">Instrutor dos módulos no seguimento de Eletro e Supermercado.</li>
                         <li className="about_infor-link">Analista de Requisitos </li>
                         <li className="about_infor-link">Analista de Banco de Dados MySQL.</li>
                         <li className="about_infor-link">Analista de negócios </li>
                         <li className="about_infor-link">Desenvolvimento e designer de relatórios na linguagem C.</li>
                       </ul>
                     </div>

                     <div className="about__cabecalho--modifield portifolio__border-bottom-unset">
                      <p className="about__titulo">Técnico em informática</p>
                      <p className="about__subtitulo">Exército Brasileiro</p>
                      <p className="about__legend">jun de 1998 - jun de 2002 · 4 anos 1 mêsjun de 1998 - jun de 2002 · 4 anos 1 mês
                        Brasília e Região, Brasil</p>
                       <ul className="about_infor">
                         <li className="about_infor-link about_infor-link--justify">Contribuir para a garantia da soberania nacional, dos poderes constitucionais, da lei e da ordem, trabalhei com técnico em informática na casa de ordem.
                          Para isto, fui preparado para a força terrestre, mantendo-a em permanente estado de prontidão.</li>
                       </ul>
                     </div>

                   </div>
                 </div>
               </div>
               <div className="panel panel-default">
                 <div className="panel-heading" role="tab" id="headingFour">
                   <h4 className="panel-title">
                     <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Formação acadêmica
                     </a>
                   </h4>
                 </div>
                 <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                  <div className="panel-body">  
                    <div className="about__cabecalho--modifield portifolio__border-bottom-unset">
                      <p className="about__titulo">UNIARAXÁ – Centro Universitário do Planalto de AraxáUNIARAXÁ – Centro Universitário do Planalto de Araxá</p>
                      <p className="about__subtitulo">Bacharelado, Tecnologia em Tecnologia da Informação/Sistemas da InformaçãoBacharelado, Tecnologia em Tecnologia da Informação/Sistemas da Informação</p>
                      <p className="about__legend">2006 - 2010</p>
                    </div>
                  </div>
                 </div>
               </div>

               <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingFive">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Licenças e certificados
                    </a>
                  </h4>
                </div>
                <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                  <div className="panel-body">
                    
					<div className="about__cabecalho--modifield">
                      <p className="about__titulo">Execução do projeto: Como executar o projeto</p>
                      <p className="about__subtitulo">Coursera Learner - GOOGLE</p>
                      <p className="about__legend">Emitido em Abr de 2023 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.coursera.org/account/accomplishments/certificate/5UR37XX6VF75"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
					
					<div className="about__cabecalho--modifield">
                      <p className="about__titulo">Planejamento de projetos: Como reunir tudo</p>
                      <p className="about__subtitulo">Coursera Learner - GOOGLE</p>
                      <p className="about__legend">Emitido em Mar de 2023 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.coursera.org/account/accomplishments/certificate/JWZYYCS5RJEU"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
					
					<div className="about__cabecalho--modifield">
                      <p className="about__titulo">Início do projeto: Como começar um projeto bemsucedido</p>
                      <p className="about__subtitulo">Coursera Learner - GOOGLE</p>
                      <p className="about__legend">Emitido em jan de 2023 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.coursera.org/account/accomplishments/certificate/KRGXPTJHCPL6"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
					
					<div className="about__cabecalho--modifield">
                      <p className="about__titulo">Fundamentos do gerenciamento de projetos</p>
                      <p className="about__subtitulo">Coursera Learner - GOOGLE</p>
                      <p className="about__legend">Emitido em dec de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.coursera.org/account/accomplishments/certificate/SQ3E8WYHALSJ"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
					
					<div className="about__cabecalho--modifield">
                      <p className="about__titulo">JAVA - DESIGN PATTERNS</p>
                      <p className="about__subtitulo">HCODE</p>
                      <p className="about__legend">Emitido em abr de 2023 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://hcode.com.br/certificates/20234DPJAVA9399OOTQBZQADEPBMZR5N"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
					
                    <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Formação React JS</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em abr de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/degree/certificate/a06aa5d9-d0c8-4ef3-b354-0f0539ccd6cd"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>

                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Formação  HTML E CSS</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/degree/certificate/41c3c97a-4166-4abb-ba17-c089136ea42c"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>

                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Formação Spring Framework</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/degree/certificate/a0b3e6ba-5f58-45ce-bc6a-8d3941bde0c0"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">HTML5 E CSS3 PARTE 4: AVANÇANDO NO CSS</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/4d980c9a-af5e-46ed-9664-30b82cf35c5f"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Java com Spring Boot no back end, TypeScript com ReactJS</p>
                      <p className="about__subtitulo">DevSuperior</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://learn.devsuperior.com/certificados/241463"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">REACT ROUTER: NAVEGAÇÃO EM UMA SPA</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/cc2027a0-8181-4600-b847-5b7e4b65fe97"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">REACT: ABSTRAINDO SEU CSS COM STYLED COMPONENTS</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/cc2027a0-8181-4600-b847-5b7e4b65fe97"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">REACT: CICLO DE VIDA DOS COMPONENTES</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/0f3b1ffa-2653-4819-ac8f-a32f54943302"
                        target="_blank" rel="noopener noreferrer"> Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">REACT: HOOKS, CONTEXTOS E BOAS PRÁTICAS</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/09526ea1-f9ef-4539-9127-f35b4f6161a3"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">React: Function Components, uma abordagem moderna</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/b2f63310-8ac4-47c3-8548-73250f9732b4"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">REACT: ENTENDENDO COMO A BIBLIOTECA FUNCIONA</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/329b0c31-719c-4249-8a29-f8a3350fd0c4"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">SPRING BOOT API REST: CONSTRUA UMA API</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em mar de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/4024ee57-6d5d-4e30-9f36-a75eee7e5ab2"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">SPRING BOOT API REST: SEGURANÇA DA API, CACHE E MONITORAMENTO</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em fev de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/b9a3e91b-502f-469b-9458-ccd4734a8f51"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">SPRING BOOT E TESTE: PROFILES, TESTES E DEPLOY</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em fev de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/aca36c8d-fe3a-47b8-9d86-1dcfebc039d8"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">SPRING DATA JPA: REPOSITÓRIOS, CONSULTAS, PROJEÇÕES E SPECIFICATIONS</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em fev de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/822e5e0a-59ce-4ccc-a90d-20966839ac73"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">SPRING MVC: AUTENTICAÇÃO COM SPRING SECURITY, API REST E AJAX</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em fev de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/063fc23e-8eaa-488c-b1bd-34cd3be4d010"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">JAVA E JDBC: TRABALHANDO COM UM BANCO DE DADOS</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em fev de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/fe32eed0-5d21-442f-ba9b-291eb39c6fa7"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">JAVA E JPA: CONSULTAS AVANÇADAS, PERFORMANCE E MODELOS COMPLEXOS</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em jan de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/868a831c-60f7-4399-9127-2d17aada0e90"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>

                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">JAVA SERVLET: AUTENTICAÇÃO, AUTORIZAÇÃO E O PADRÃO MVC</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em jan de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/99148cd1-1157-493f-9cd3-e2949d475a28"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>

                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">JAVA SERVLET: FUNDAMENTOS DA PROGRAMAÇÃO WEB JAVA</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em jan de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/fff59598-bd85-4f95-b000-0a909a1ab1bf"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>

                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">MAVEN: GERENCIAMENTO DE DEPENDÊNCIAS E BUILD DE APLICAÇÕES JAVA</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em jan de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/e5147037-d934-4274-9acc-f63c9baec3d2"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>

                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">PERSISTÊNCIA COM JPA: INTRODUÇÃO AO HIBERNATE</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em jan de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/1c70e461-61ac-44ee-8f25-97418c900d71"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">SPRING MVC: CRIE UM WEB APP COM THYMELEAF E BOOTSTRAP</p>
                      <p className="about__subtitulo">Alura</p>
                      <p className="about__legend">Emitido em jan de 2022 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://cursos.alura.com.br/certificate/91ae2888-2b18-4981-abca-7953b1996507"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">C# COMPLETO Programação Orientada a Objetos + Projetos</p>
                      <p className="about__subtitulo">Udemy</p>
                      <p className="about__legend">Emitido em out de 2021 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.udemy.com/certificate/UC-6396a92f-7cdf-456c-829e-0241153684e5/"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Formação SQL Server 2017 Desenvolvedor Expert SQL e T-SQL</p>
                      <p className="about__subtitulo">Udemy</p>
                      <p className="about__legend">Emitido em abr de 2021 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.udemy.com/certificate/UC-c6b445e1-c630-459e-a8b3-a760d7096b93/"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Java COMPLETO Programação Orientada a Objetos +Projetos</p>
                      <p className="about__subtitulo">Udemy</p>
                      <p className="about__legend">Emitido em nov de 2020 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.udemy.com/certificate/UC-6fadd5b8-b798-4910-8025-4bec4b594b7b/"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>
                     <div className="about__cabecalho--modifield portifolio__border-bottom-unset">
                      <p className="about__titulo">Banco de Dados Oracle SQL e PL/SQL</p>
                      <p className="about__subtitulo">Udemy</p>
                      <p className="about__legend">Emitido em jul de 2018 · Sem data de expiração</p>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.udemy.com/certificate/UC-SP4ATN4A/"
                        target="_blank" rel="noopener noreferrer" > Credencial</a
                      >
                     </div>


                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingSix">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Cursos
                    </a>
                  </h4>
                </div>
                <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                  <div className="panel-body">
                    <div className="about__cabecalho--modifield">
                      <p className="about__titulo">
                        Linux Essentials</p>
                      <p className="about__subtitulo">Novintec-Brasilia</p>
                      <p className="about__legend">jan de 1998 - abr de 1998 Brasilia-DF, Brasil</p>
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">
                        Linux Network Administration</p>
                        <p className="about__subtitulo">Novintec-Brasilia</p>
                        <p className="about__legend">jul de 1998 - out de 1998 Brasilia-DF, Brasil</p>
                     </div>
                     <div className="about__cabecalho--modifield">
                      <p className="about__titulo">
                        Linux System Administration</p>
                        <p className="about__subtitulo">Novintec-Brasilia</p>
                        <p className="about__legend">fev de 1999 - jun de 1999 Brasilia-DF, Brasil</p>
                     </div>
                     <div className="about__cabecalho--modifield portifolio__border-bottom-unset">
                      <p className="about__titulo">
                        Linux Enterprise Administration</p>
                        <p className="about__subtitulo">Novintec-Brasilia</p>
                        <p className="about__legend">set de 1999 - fev de 2000 Brasilia-DF, Brasil</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingSeven">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Atividades
                    </a>
                  </h4>
                </div>
                <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                  <div className="panel-body">
                    <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Desenvolvimento WEB</p>
                      <p className="about__subtitulo">Project Back-End | Front-End (Araxá Projects Web)</p>
                      <p className="about__legend"></p>
                      <a
                        className="btn btn-about__custom "
                        href="https://araxaprojetosweb.com.br/"
                        target="_blank" rel="noopener noreferrer"
                        > Visualizar</a
                      >
                     </div>
                    <div className="about__cabecalho--modifield">
                      <p className="about__titulo">Desenvolvimento em estudo</p>
                      <p className="about__subtitulo">Project Back-End | Front-End (CredRapido-Araxá)</p>
                      <p className="about__legend"></p>
                      <a
                        className="btn btn-about__custom "
                        href="https://credrapidoaraxa.netlify.app/"
                        target="_blank" rel="noopener noreferrer"
                        > Visualizar</a
                      >
                     </div>
                    <div className="about__cabecalho--modifield">
                      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6919490770727006208" height="300" width="100%" frameBorder="0" allowFullScreen title="Publicação incorporada"></iframe>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.linkedin.com/posts/fl%C3%A1vio-rog%C3%A9rio-722a56159_java-react-springboot-activity-6919490771645558784-w7rp?utm_source=linkedin_share&utm_medium=member_desktop_web"
                        target="_blank" rel="noopener noreferrer"
                        > Visualizar</a
                      >
                    </div>
                    <div className="about__cabecalho--modifield">
                      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6915901420097425408" height="300" width="100%" frameBorder="0" allowFullScreen title="Publicação incorporada"></iframe>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.linkedin.com/posts/fl%C3%A1vio-rog%C3%A9rio-722a56159_fl%C3%A1vio-rog%C3%A9rio-da-silva-forma%C3%A7%C3%A3o-activity-6915901421028560896-tQk7?utm_source=linkedin_share&utm_medium=member_desktop_web"
                        target="_blank" rel="noopener noreferrer"
                        > Visualizar</a
                      >
                    </div>
                    <div className="about__cabecalho--modifield">
                      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6908037907299340288" height="300" width="100%" frameBorder="0" allowFullScreen title="Publicação incorporada"></iframe>
                      <a
                        className="btn btn-about__custom "
                        href="https://www.linkedin.com/posts/fl%C3%A1vio-rog%C3%A9rio-722a56159_reactjs-sprinboot-activity-6908037909593620480-R29A?utm_source=linkedin_share&utm_medium=member_desktop_web"
                        target="_blank" rel="noopener noreferrer"
                        > Visualizar</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingEigth">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEigth" aria-expanded="false" aria-controls="collapseEigth">
                        Competências
                    </a>
                  </h4>
                </div>
                <div id="collapseEigth" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEigth">
                  <div className="panel-body">
                    <div className="about__cabecalho">
                      <ul className="chec-radio">
                        <li className="pz">
                          <label className="radio-inline">
                            <input
                              type="checkbox"
                              id="pro-chx-residential"
                              name="gas_availability"
                              className="pro-chx"
                              value="yes"
                              defaultChecked
                            />
                            <div className="clab clab--linux">
							<a href="https://www.linkedin.com/skill-assessments/Linux/report/" target="_blank" rel="noopener noreferrer"> Linux</a>
							</div>
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
                            <div className="clab clab--java">
							<a href="https://www.linkedin.com/skill-assessments/Java/report/" target="_blank" rel="noopener noreferrer"> Java</a>
							</div>
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
                            <div className="clab clab--spring">Spring Boot</div>
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
                            <div className="clab clab--mysql">MySQL</div>
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
                            <div className="clab clab--win">
							
							<a href="https://www.linkedin.com/skill-assessments/React.js/report/" target="_blank" rel="noopener noreferrer"> REACT</a>
							</div>
                          </label>
                        </li>
						<li className="pz">
                          <label className="radio-inline">
                            <input
                              type="checkbox"
                              id="pro-chx-residential"
                              name="gas_availability"
                              className="pro-chx"
                              value="yes"
                              defaultChecked
                            />
                            <div className="clab clab--linux">TYPESCRIPT</div>
                          </label>
                        </li>
						<li className="pz">
                          <label className="radio-inline">
                            <input
                              type="checkbox"
                              id="pro-chx-residential"
                              name="gas_availability"
                              className="pro-chx"
                              value="yes"
                              defaultChecked
                            />
                            <div className="clab clab--linux">NextJs</div>
                          </label>
                        </li>
						<li className="pz">
                          <label className="radio-inline">
                            <input
                              type="checkbox"
                              id="pro-chx-residential"
                              name="gas_availability"
                              className="pro-chx"
                              value="yes"
                              defaultChecked
                            />
                            <div className="clab clab--linux">JAVASCRIPT</div>
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
                            <div className="clab clab--sql">Microsoft SQL Server</div>
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
                            <div className="clab clab--dev">Desenvolvimento de aplicativos</div>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
 
             </div>
             
           </div>
         </div> 
      </aside>
    </>
  );
};

export default Curriculo;
