import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Contact from './pages/contact';
import Search from './pages/saved';
import ViewProperty from './pages/view_property';
import Home from './pages/home';
import About from "./pages/about";
import { useState } from 'react';
import { UserProvider, useUserContext } from './pages/usercontext';
import PostProperty from './pages/property_post';
import { Navigate } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (firstname) => {
    setUser( firstname );
  };


    const ProtectedRoute = ({ element, ...rest }) => {
      console.log(user)
    return user ? <Navigate to="/" /> : element;
  };
  return (
    <div className="App">
      <UserProvider>
       <BrowserRouter>
      <Routes>
      <Route path="/login" element={<ProtectedRoute element={<Login onLogin={handleLogin} />} />} />

      <Route path="/register" element={<ProtectedRoute element={<Register />} />} />
        <Route path="/register" element={<Register />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>

      <Route path="/search" element={<Search />}></Route>
      <Route path="/view_property" element={<ViewProperty />}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/likes" element={<Search/>}></Route>
      <Route path='/post' element={<PostProperty/>}></Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
      
    </div>
  );
}

export default App;
