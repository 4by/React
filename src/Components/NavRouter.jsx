import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';
// HashRouter вместо BrowserRouter чтобы запустить на GithubPages

const NavRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/blog" element={<Blog />} />
      {/* СООТВЕТСТВИЕ ССЫЛКАМ  */}
    </Routes>
  </Router>
);

export default NavRouter;
