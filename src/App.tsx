import './app.scss'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/notLogged/Login'
import Register from './pages/notLogged/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Verify from './pages/notLogged/Verify';
import Home from './pages/Logged/Home';
import Footer from './Components/Footer';

const App: React.FC = () => {
  const isLogged = localStorage.getItem("isLogged") == "logado";
  return (
    <Router>
      <div className="container">
        {!isLogged ?
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
          </Routes> :
          <>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer/>
          </>
        }
      </div>
    </Router>
  );
};

export default App;
