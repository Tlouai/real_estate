import React from 'react';
import { useUserContext } from './usercontext';

function About() {

  
  function logout() {
    dispatch({ type: 'LOGOUT'});
  }
  const { state, dispatch } = useUserContext();
  return (
    <div>
      {/* Header section starts here */}
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <a href="/" className="logo"><i className="fas fa-house"></i>MyHome</a>
            <ul>
              <li><a href="post">post property <i className="fas fa-paper-plane"></i></a></li>
            </ul>
          </section>
        </nav>

        <nav className="navbar nav-2">
          <section className="flex">
            <div id="menu-btn" className="fas fa-bars"></div>

            <div className="menu">
              <ul>
                <li>
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">ready to move</a></li>
                    <li><a href="#">furnished</a></li>
                  </ul>
                </li>
                <li>
                  <a href="post">post property <i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="post">post property</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">help <i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="about">about us</a></li>
                    <li><a href="contact">Search</a></li>
                    <li><a href="about#faq">FAQ</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">all listings <i className="fas fa-angle-down"></i></a>
                  <ul>
                  <a href="/">all listings <i className="fas fa-angle-down"></i></a>
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

      {/* Listings section starts */}
      <section className="listings">
        <h1 className="heading">latest listings</h1>

        <div className="box-container">
          {/* Your listing boxes go here */}
        </div>
      </section>
      {/* Listings section ends */}

      {/* Footer section starts */}
      <footer className="footer">
        <section className="flex">
          {/* Footer content */}
        </section>
        <div className="credit">&copy; copyright @ 2024 by <span>Mr. Louai</span> | all rights reserved!</div>
      </footer>
      {/* Footer section ends */}
    </div>
  );
}

export default About;
