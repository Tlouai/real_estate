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

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/listings" element={<Listings />}></Route>
      <Route path="/viewproperty" element={<ViewProperty />}></Route>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
