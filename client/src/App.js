import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Error404 from './pages/Error404';
import Home from './pages/home/Home';
import Support from './pages/support/Support';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
