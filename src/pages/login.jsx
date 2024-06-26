import React, { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import { useUserContext } from '../pages/usercontext';

function Login({ }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state , dispatch } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      });
      const { id, firstname } = response.data;
      alert('Login successful');
      await redirect('/')
      dispatch({ type: 'SET_USER', payload: { id, firstname } });

    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login Failed');
      redirect('/')
    }
  };

   
  function logout() {
    dispatch({ type: 'LOGOUT'});
  }

  return (
    <div className="header">
      {/* Header section starts */}
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <a href="/" className="logo"><i className="fas fa-house"></i>MyHome</a>
            <ul>
              <li><a href="post">post property<i className="fas fa-paper-plane"></i></a></li>
            </ul>
          </section>
        </nav>
        
        <nav className="navbar nav-2">
          <section className="flex">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div className="menu">
              <ul>
                <li><a href="#">help<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="about">about us</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul>
                <li>
                  <a href="likes">saved <i className="far fa-heart"></i></a>
                </li>
                <li>
                  {(state.user == null || state.user == undefined ) ?
                    <div>
                      <a href="#">
                        account <i className="fas fa-angle-down"></i>
                      </a>
                      <ul>
                        <li><a href="login">login</a></li>
                        <li><a href="register">register</a></li>
                      </ul>
                    </div> : <a href="/">{state.user.firstname}<i className="far fa-heart"></i></a>}
                </li>
                {(state.user == null || state.user == undefined ) ||
                <li>
                  <a href="#" onClick={logout}>Logout <i className="far fa-heart"></i></a>
                </li>}
              </ul>
          </section>
        </nav>
      </header>
      {/* Header section ends */}
      
      {/* Login section starts */}
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>welcome back!</h3>
          <input type="email" name="email" required maxLength="50" placeholder="enter your email" className="box" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="pass" required maxLength="20" placeholder="enter your password" className="box" value={password} onChange={(e) => setPassword(e.target.value)} />
          <p>don't have an account? <a href="register">register new</a></p>
          <input type="submit" value="login now" name="submit" className="btn" />
        </form>
      </section>
      {/* Login section ends */}
      
      {/* Footer section starts */}
      <footer className="footer">
        <section className="flex">
          <div className="box">
            <a href="tel:1234567890"><i className="fas fa-phone"></i><span>123456789</span></a>
            <a href="tel:1112223333"><i className="fas fa-phone"></i><span>1112223333</span></a>
            <a href="mailto:shaikhanas@gmail.com"><i className="fas fa-envelope"></i><span>shaikhanas@gmail.com</span></a>
            <a href="#"><i className="fas fa-map-marker-alt"></i><span>mumbai, india - 400104</span></a>
          </div>
          <div className="box">
            <a href="home"><span>home</span></a>
            <a href="about"><span>about</span></a>
            <a href="contact"><span>contact</span></a>
            <a href="listings"><span>all listings</span></a>
            <a href="likes"><span>saved properties</span></a>
          </div>
          <div className="box">
            <a href="#"><span>facebook</span><i className="fab fa-facebook-f"></i></a>
            <a href="#"><span>twitter</span><i className="fab fa-twitter"></i></a>
            <a href="#"><span>linkedin</span><i className="fab fa-linkedin"></i></a>
            <a href="#"><span>instagram</span><i className="fab fa-instagram"></i></a>
          </div>
        </section>
        <div className="credit">&copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved!</div>
      </footer>
      {/* Footer section ends */}
      
      {/* Custom JS file link */}
      <script src="js/script.js"></script>
    </div>
  );
}

export default Login;
