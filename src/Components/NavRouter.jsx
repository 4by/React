import React from 'react';

// HashRouter вместо BrowserRouter чтобы запустить на GithubPages
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';

const NavRouter = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/blog" element={<Blog />} />
      {/* СООТВЕТСТВИЕ ССЫЛКАМ  */}
    </Routes>
  </HashRouter>
);

export default NavRouter;
