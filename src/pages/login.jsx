import React from 'react';

function Login() {
  return (
    <div className="header">
      {/* Header section starts */}
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
                <li><a href="#">buy<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">ready to move</a></li>
                    <li><a href="#">furnished</a></li>
                  </ul>
                </li>
                <li><a href="#">sell<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="#">post property</a></li>
                    <li><a href="#">dashboard</a></li>
                  </ul>
                </li>
                <li><a href="#">rent</a>
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                  </ul>
                </li>
                <li><a href="#">help<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="about.html">about us</a></li>
                    <li><a href="contact.html">contact us</a></li>
                    <li><a href="contact.html#faq">FAQ</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul>
              <li><a href="#">saved <i className="far fa-heart"></i></a></li>
              <li><a href="#">account <i className="fas fa-angle-down"></i></a>
                <ul>
                  <li><a href="login">login</a></li>
                  <li><a href="register">register</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </nav>
      </header>
      {/* Header section ends */}
      
      {/* Login section starts */}
      <section className="form-container">
        <form action="" method="post">
          <h3>welcome back!</h3>
          <input type="email" name="email" required maxLength="50" placeholder="enter your email" className="box" />
          <input type="password" name="pass" required maxLength="20" placeholder="enter your password" className="box" />
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
            <a href="home.html"><span>home</span></a>
            <a href="about.html"><span>about</span></a>
            <a href="contact.html"><span>contact</span></a>
            <a href="listings.html"><span>all listings</span></a>
            <a href="#"><span>saved properties</span></a>
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