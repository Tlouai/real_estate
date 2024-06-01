import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Contact from './pages/contact';
import Search from './pages/search';
import Listings from './pages/listings';
import ViewProperty from './pages/view_property';
import Home from './pages/home';
import About from "./pages/about";
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (firstname) => {
    setUser({ firstname });
  };
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />}>
          
        </Route>
        <Route path="/register" element={<Register />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>

      <Route path="/search" element={<Search />}></Route>
      <Route path="/listings" element={<Listings />}></Route>
      <Route path="/view_property" element={<ViewProperty />}></Route>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
