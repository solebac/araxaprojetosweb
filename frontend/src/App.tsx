import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormAutoSys from "./components/conteudo/application_sys/action/FormAutoSys";
import FormCategoriasSys from "./components/conteudo/application_sys/action/FormCategoriasSys";
import FormPostagensSys from "./components/conteudo/application_sys/action/FormPostagensSys";
import HomeSys from "./components/conteudo/application_sys/HomeSys";
import ListAutorSys from "./components/conteudo/application_sys/ListAutorSys";
import ListCategoriasSys from "./components/conteudo/application_sys/ListCategoriasSys";
import ListComentariosSys from "./components/conteudo/application_sys/ListComentariosSys";
import ListPostagensSys from "./components/conteudo/application_sys/ListPostagensSys";
import Blog from "./pages/Blog";
import Posts from "./pages/Blog/Posts";
import Contato from "./pages/Contato";
import Attack from "./pages/Hacker/Attack";
import Ethical from "./pages/Hacker/Ethical";
import Quarentena from "./pages/Hacker/Quarentena";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pagina404 from "./pages/Pagina404";
import Portifolio from "./pages/Portifolio";
import About from "./pages/Portifolio/About";
import Find from "./pages/Portifolio/Find";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          {/** <Route path="/blog/posts" element={<Posts />} /> */}
          <Route path="/blog/posts">
            <Route path=":slug" element={<Posts />} />
          </Route>
          <Route path="/contato" element={<Contato />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/portifolio/about" element={<About />} />
          <Route path="/portifolio/find" element={<Find />} />
          <Route path="/hacker/attack" element={<Attack />} />
          <Route path="/hacker/ethical" element={<Ethical />} />
          <Route path="/hacker/quarentena" element={<Quarentena />} />

          <Route path="/aplicationsys" element={<HomeSys />} />
          <Route path="/aplicationsys/autor" element={<ListAutorSys />} />
          <Route
            path="/aplicationsys/autor/adicionar"
            element={<FormAutoSys tipo={0} />}
          />
          <Route path="/aplicationsys/autor/editar">
            <Route path=":autorId" element={<FormAutoSys tipo={1} />} />
          </Route>
          <Route path="/aplicationsys/autor/visualizar">
            <Route path=":autorId" element={<FormAutoSys tipo={2} />} />
          </Route>

          <Route path="/aplicationsys/posts" element={<ListPostagensSys />} />
          <Route
            path="/aplicationsys/posts/adicionar"
            element={<FormPostagensSys tipo={0} />}
          />

          <Route path="/aplicationsys/posts/editar">
            <Route path=":articlesId" element={<FormPostagensSys tipo={1} />} />
          </Route>

          <Route path="/aplicationsys/posts/visualizar">
            <Route path=":articlesId" element={<FormPostagensSys tipo={2} />} />
          </Route>

          <Route
            path="/aplicationsys/categoria"
            element={<ListCategoriasSys />}
          />
          <Route
            path="/aplicationsys/categoria/adicionar"
            element={<FormCategoriasSys tipo={0} />}
          />
          <Route path="/aplicationsys/categoria/editar">
            <Route
              path=":categoriaId"
              element={<FormCategoriasSys tipo={1} />}
            />
          </Route>

          <Route path="/aplicationsys/categoria/visualizar">
            <Route
              path=":categoriaId"
              element={<FormCategoriasSys tipo={2} />}
            />
          </Route>

          <Route
            path="/aplicationsys/comments"
            element={<ListComentariosSys />}
          />

          {/*
          <Route path="/aplicationsys">
            <Route path=":pagina" element={<AplicationSys />} />
          </Route>
          <Route path="/aplicationsys">
            <Route path=":pagina/:acao" element={<AplicationSys />} />
          </Route>
          <Route path="/aplicationsys">
            <Route path=":pagina/:acao/:id" element={<AplicationSys />} />
          </Route>*/}

          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
