import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Attack from "./pages/Hacker/Attack";
import Ethical from "./pages/Hacker/Ethical";
import Quarentena from "./pages/Hacker/Quarentena";
import Home from "./pages/Home";
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/portifolio/about" element={<About />} />
          <Route path="/portifolio/find" element={<Find />} />
          <Route path="/hacker/attack" element={<Attack />} />
          <Route path="/hacker/ethical" element={<Ethical />} />
          <Route path="/hacker/quarentena" element={<Quarentena />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
