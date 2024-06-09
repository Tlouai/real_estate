import React from 'react';

function Search() {
  return (
    <div className="header">
      {/* Header section starts here */}
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
                    Buy<i className="fas fa-angle-down"></i>
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
                    <li><a href="#">post dashboard</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    rent<i className="fas fa-angle-down"></i>
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
                    <li><a href="about#faq">FAQ</a></li>
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
                  account<i className="fas fa-angle-down"></i>
                </a>
                <ul>
                  <li><a href="login">login</a></li>
                  <li><a href="registration">register</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </nav>
      </header>
      {/* Header section ends */}

      <div className="home">
        <section className="center">
          <form action="search" method="post">
            <h3>find your perfect home</h3>
            <div className="box">
              <p>
                enter location <span>*</span>
              </p>
              <input
                type="text"
                name="location"
                required
                maxLength="50"
                placeholder="enter city name"
                className="input"
              />
            </div>
            <div className="flex">
              <div className="box">
                <p>
                  property type <span>*</span>
                </p>
                <select name="type" className="input" required>
                  <option value="flat">flat</option>
                  <option value="house">house</option>
                  <option value="shop">shop</option>
                </select>
              </div>
              <div className="box">
                <p>
                  how many BHK <span>*</span>
                </p>
                <select name="bhk" className="input" required>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5">5 BHK</option>
                  <option value="6">6 BHK</option>
                  <option value="7">7 BHK</option>
                  <option value="8">8 BHK</option>
                  <option value="9">9 BHK</option>
                </select>
              </div>
              <div className="box">
                <p>
                  minimum budget <span>*</span>
                </p>
                <select name="minimum" className="input" required>
                  <option value="5000000">5 lac</option>
                  <option value="1000000">10 lac</option>
                  <option value="2000000">20 lac</option>
                  <option value="3000000">30 lac</option>
                  <option value="4000000">40 lac</option>
                  <option value="5000000">50 lac</option>
                  <option value="6000000">60 lac</option>
                  <option value="7000000">70 lac</option>
                  <option value="8000000">80 lac</option>
                  <option value="9000000">90 lac</option>
                  <option value="10000000">1 Cr</option>
                  <option value="20000000">2 Cr</option>
                  <option value="30000000">3 Cr</option>
                  <option value="40000000">4 Cr</option>
                  <option value="50000000">5 Cr</option>
                  <option value="60000000">6 Cr</option>
                  <option value="70000000">7 Cr</option>
                  <option value="80000000">8 Cr</option>
                  <option value="90000000">9 Cr</option>
                  <option value="100000000">10 Cr</option>
                  <option value="150000000">15 Cr</option>
                  <option value="200000000">20 Cr</option>
                </select>
              </div>
              <div className="box">
                <p>
                  maximum budget <span>*</span>
                </p>
                <select name="maximum" className="input" required>
                  <option value="5000000">5 lac</option>
                  <option value="1000000">10 lac</option>
                  <option value="2000000">20 lac</option>
                  <option value="3000000">30 lac</option>
                  <option value="4000000">40 lac</option>
                  <option value="5000000">50 lac</option>
                  <option value="6000000">60 lac</option>
                  <option value="7000000">70 lac</option>
                  <option value="8000000">80 lac</option>
                  <option value="9000000">90 lac</option>
                  <option value="10000000">1 Cr</option>
                  <option value="20000000">2 Cr</option>
                  <option value="30000000">3 Cr</option>
                  <option value="40000000">4 Cr</option>
                  <option value="50000000">5 Cr</option>
                  <option value="60000000">6 Cr</option>
                  <option value="70000000">7 Cr</option>
                  <option value="80000000">8 Cr</option>
                  <option value="90000000">9 Cr</option>
                  <option value="100000000">10 Cr</option>
                  <option value="150000000">15 Cr</option>
                  <option value="200000000">20 Cr</option>
                </select>
              </div>
            </div>
            <input type="submit" value="search property" name="search" className="btn" />
          </form>
        </section>
      </div>

      <section className="services">
        <h1 className="heading">our services</h1>
        <div className="box-container">
          <div className="box">
            <img src="images/icon-1.png" alt="" />
            <h3>buy house</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, incidunt.</p>
          </div>
          <div className="box">
            <img src="images/icon-2.png" alt="" />
            <h3>rent house</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, incidunt.</p>
          </div>
          <div className="box">
            <img src="images/icon-3.png" alt="" />
            <h3>sell house</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, incidunt.</p>
          </div>
          <div className="box">
            <img src="images/icon-4.png" alt="" />
            <h3>flats and buildings</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, incidunt.</p>
          </div>
          <div className="box">
            <img src="images/icon-5.png" alt="" />
            <h3>shops and malls</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, incidunt.</p>
          </div>
          <div className="box">
            <img src="images/icon-6.png" alt="" />
            <h3>24/7 service</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, incidunt.</p>
          </div>
        </div>
      </section>

      <section className="listings">
        <h1 className="heading">latest listings</h1>
        <div className="box-container">
          <div className="box">
            <div className="admin">
              <h3>j</h3>
              <div>
                <p>john deo</p>
                <span>10-11-2024</span>
              </div>
            </div>
            <div className="thumb">
              <p className="total-images">
                <i className="far fa-images"></i><span>4</span>
              </p>
              <p className="type">
                <span>house</span><span>sale</span>
              </p>
              <form action="" method="post" className="save">
                <button type="submit" name="save" className="far fa-heart"></button>
              </form>
              <img src="images/house-img-1.webp" alt="" />
            </div>
            <h3 className="name">modern flats and apartments</h3>
            <p className="location">
              <i className="fa fa-map-marker-alt"></i><span>Dubai, UAE</span>
            </p>
            <div className="flex">
              <p>
                <i className="fas fa-bed"></i><span>3</span>
              </p>
              <p>
                <i className="fas fa-bath"></i><span>2</span>
              </p>
              <p>
                <i className="fas fa-maximize"></i><span>750sq</span>
              </p>
            </div>
          </div>

          <div className="box">
            <div className="admin">
              <h3>j</h3>
              <div>
                <p>john deo</p>
                <span>10-11-2024</span>
              </div>
            </div>
            <div className="thumb">
              <p className="total-images">
                <i className="far fa-images"></i><span>4</span>
              </p>
              <p className="type">
                <span>flat</span><span>sale</span>
              </p>
              <form action="" method="post" className="save">
                <button type="submit" name="save" className="far fa-heart"></button>
              </form>
              <img src="images/house-img-2.webp" alt="" />
            </div>
            <h3 className="name">modern flats and apartments</h3>
            <p className="location">
              <i className="fa fa-map-marker-alt"></i><span>Dubai, UAE</span>
            </p>
            <div className="flex">
              <p>
                <i className="fas fa-bed"></i><span>3</span>
              </p>
              <p>
                <i className="fas fa-bath"></i><span>2</span>
              </p>
              <p>
                <i className="fas fa-maximize"></i><span>750sq</span>
              </p>
            </div>
          </div>

          <div className="box">
            <div className="admin">
              <h3>j</h3>
              <div>
                <p>john deo</p>
                <span>10-11-2024</span>
              </div>
            </div>
            <div className="thumb">
              <p className="total-images">
                <i className="far fa-images"></i><span>4</span>
              </p>
              <p className="type">
                <span>flat</span><span>sale</span>
              </p>
              <form action="" method="post" className="save">
                <button type="submit" name="save" className="far fa-heart"></button>
              </form>
              <img src="images/house-img-3.jpg" alt="" />
            </div>
            <h3 className="name">modern flats and apartments</h3>
            <p className="location">
              <i className="fa fa-map-marker-alt"></i><span>Dubai, UAE</span>
            </p>
            <div className="flex">
              <p>
                <i className="fas fa-bed"></i><span>3</span>
              </p>
              <p>
                <i className="fas fa-bath"></i><span>2</span>
              </p>
              <p>
                <i className="fas fa-maximize"></i><span>750sq</span>
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <a href="listings" className="inline-btn">view all</a>
        </div>
      </section>

      <footer className="footer">
        <section className="flex">
          <div className="box">
            <a href="tel:1234567890">
              <i className="fas fa-phone"></i><span>123456789</span>
            </a>
            <a href="tel:111222333">
              <i className="fas fa-phone"></i><span>111222333</span>
            </a>
            <a href="mailto:louai@gmail.com">
              <i className="fas fa-envelope"></i><span>louai@gmail.com</span>
            </a>
            <a href="#">
              <i className="fas fa-marker-alt"></i><span>Alain, UAE</span>
            </a>
          </div>

          <div className="box">
            <a href="/"><span>home</span></a>
            <a href="about"><span>about</span></a>
            <a href="contact"><span>contact</span></a>
            <a href="listings"><span>listings</span></a>
            <a href="likes"><span>saved properties</span></a>
          </div>

          <div className="box">
            <a href="#">
              <span>facebook</span><i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <span>twitter</span><i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <span>linkedin</span><i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <span>instagram</span><i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <div className="credit">
          &copy; copyright @ 2024 by <span>Mr. Louai</span> | all right reserved!
        </div>
      </footer>

      {/* custom js file link */}
      <script src="js/script.js"></script>
    </div>
  );
}

export default Search;
