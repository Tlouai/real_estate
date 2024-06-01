import React from 'react';

function About() {
  return (
    <div>
      {/* Header section starts here */}
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <a href="/" className="logo"><i className="fas fa-house"></i>MyHome</a>
            <ul>
              <li><a href="#">post property <i className="fas fa-paper-plane"></i></a></li>
            </ul>
          </section>
        </nav>

        <nav className="navbar nav-2">
          <section className="flex">
            <div id="menu-btn" className="fas fa-bars"></div>

            <div className="menu">
              <ul>
                <li>
                  <a href="#">Buy <i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">ready to move</a></li>
                    <li><a href="#">furnished</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">sell <i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="#">post property</a></li>
                    <li><a href="#">post dashboard</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">rent <i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">help <i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="about">about us</a></li>
                    <li><a href="contact">contact us</a></li>
                    <li><a href="about#faq">FAQ</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <ul>
              <li><a href="#">saved <i className="far fa-heart"></i></a></li>
              <li>
                <a href="#">account<i className="fas fa-angle-down"></i></a>
                <ul>
                  <li><a href="login">login</a></li>
                  <li><a href="registeration">login</a></li>
                </ul>
              </li>
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
        <div className="credit">&copy; copyright @ 2024 by <span>Mr. Louai</span> | all right reserved!</div>
      </footer>
      {/* Footer section ends */}
    </div>
  );
}

export default About;
