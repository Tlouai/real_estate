import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    c_pass: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.pass !== formData.c_pass) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/accounts', {
        firstname: formData.name,
        email: formData.email,
        password: formData.pass
      });
      console.log(response.data);
      alert('Registration successful');
    } catch (error) {
      console.error('There was an error creating the account!', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="home">
      {/* header section starts */}
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <a href="/" className="logo">
              <i className="fas fa-house"></i>MyHome
            </a>
            <ul>
              <li>
                <a href="#">
                  post property<i className="fas fa-paper-plane"></i>
                </a>
              </li>
            </ul>
          </section>
        </nav>

        <nav className="navbar nav-2">
          <section className="flex">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">
                    buy<i className="fas fa-angle-down"></i>
                  </a>
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">ready to move</a></li>
                    <li><a href="#">furnished</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    sell<i className="fas fa-angle-down"></i>
                  </a>
                  <ul>
                    <li><a href="#">post property</a></li>
                    <li><a href="#">dashboard</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    rent
                  </a>
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    help<i className="fas fa-angle-down"></i>
                  </a>
                  <ul>
                    <li><a href="about">about us</a></li>
                    <li><a href="contact">Search</a></li>
                    <li><a href="contact#faq">FAQ</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <a href="likes">
                  saved <i className="far fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  account <i className="fas fa-angle-down"></i>
                </a>
                <ul>
                  <li><a href="login">login</a></li>
                  <li><a href="register">register</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </nav>
      </header>
      {/* header section ends */}

      {/* register section starts */}
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>create an account!</h3>
          <input type="tel" name="name" required maxLength="50" placeholder="enter your name" className="box" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" required maxLength="50" placeholder="enter your email" className="box" value={formData.email} onChange={handleChange} />
          <input type="password" name="pass" required maxLength="20" placeholder="enter your password" className="box" value={formData.pass} onChange={handleChange} />
          <input type="password" name="c_pass" required maxLength="20" placeholder="confirm your password" className="box" value={formData.c_pass} onChange={handleChange} />
          <p>already have an account? <a href="login">register now</a></p>
          <input type="submit" value="register now" name="submit" className="btn" />
        </form>
      </section>
      {/* register section ends */}

      {/* footer section starts */}
      <footer className="footer">
        <section className="flex">
          <div className="box">
            <a href="tel:1234567890"><i className="fas fa-phone"></i><span>123456789</span></a>
            <a href="tel:1112223333"><i className="fas fa-phone"></i><span>1112223333</span></a>
            <a href="mailto:shaikhanas@gmail.com"><i className="fas fa-envelope"></i><span>shaikhanas@gmail.com</span></a>
            <a href="#"><i className="fas fa-map-marker-alt"></i><span>mumbai, india - 400104</span></a>
          </div>

          <div className="box">
            <a href="/"><span>home</span></a>
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
      {/* footer section ends */}

      {/* custom js file link */}
      <script src="js/script.js"></script>
    </div>
  );
}

export default Register;
