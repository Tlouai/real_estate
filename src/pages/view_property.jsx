import React from 'react';

function ViewProperty() {
  return (
    <div className="header">
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <a href="home.html" className="logo"><i className="fas fa-house"></i>MyHome</a>
            <ul>
              <li><a href="#">post property<i className="fas fa-paper-plane"></i></a></li>
            </ul>
          </section>
        </nav>
        
        <nav className="navbar nav-2">
          <section className="flex">
            <div id="menu-btn" className="fas fa-bars"></div>

            <div className="menu">
              <ul>
                <li><a href="#">Buy<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">ready to move</a></li>
                    <li><a href="#">furnished</a></li>
                  </ul>
                </li>
                
                <li><a href="#">Sell<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="#">post property</a></li>
                    <li><a href="#">post dashboard</a></li>
                  </ul>
                </li>
                
                <li><a href="#">Rent<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                  </ul>
                </li>

                <li><a href="#">Help<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="about.html">about us</a></li>
                    <li><a href="contact.html">contact us</a></li>
                    <li><a href="about.html#faq">FAQ</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <ul>
              <li><a href="#">Saved <i className="far fa-heart"></i></a></li>
              <li><a href="#">Account<i className="fas fa-angle-down"></i></a>
                <ul>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="register.html">Register</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </nav>
      </header>

      <section className="view-property">

        <div className="details">
          {/* Property Details Here */}
        </div>
      </section>

      <footer className="footer">
        <section className="flex">
          {/* Footer Content Here */}
        </section>
        
        <div className="credit">&copy; Copyright @ 2024 by <span>Mr. Louai</span> | All rights reserved!</div>
      </footer>

      <script src="js/script.js"></script>
    </div>
  );
}

export default ViewProperty;
