import { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ErrorPage from './pages/error/ErrorPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Logout from './pages/logout/Logout';
import Registration from './pages/registration/Registration';
import Support from './pages/support/Support';
import { initialState, reducer } from './reducer/UseReducer';
// Context API
export const UserContext = createContext();

const Routing = () => {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signIn" element={<Login />} />
      <Route path="/signUp" element={<Registration />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>)
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ state, dispatch }}>
          <Routing/>
        </UserContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
