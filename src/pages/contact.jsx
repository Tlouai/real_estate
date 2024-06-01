import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    const filterBtn = document.querySelector('#filter-btn');
    const closeFilterBtn = document.querySelector('#close-filter');
    const filters = document.querySelector('.filters');

    filterBtn.onclick = () => {
      filters.classList.add('active');
    };

    closeFilterBtn.onclick = () => {
      filters.classList.remove('active');
    };
  }, []);

  return (
    <div className="header">
      {/* header section starts */}
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <a href="home.html" className="logo">
              <i className="fas fa-house"></i>MyHome
            </a>
            <ul>
              <li>
                <a href="#">post property<i className="fas fa-paper-plane"></i></a>
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
                  <a href="#">rent</a>
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
                    <li><a href="about.html">about us</a></li>
                    <li><a href="contact.html">contact us</a></li>
                    <li><a href="contact.html#faq">FAQ</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <a href="#">saved <i className="far fa-heart"></i></a>
              </li>
              <li>
                <a href="#">
                  account <i className="fas fa-angle-down"></i>
                </a>
                <ul>
                  <li><a href="login.html">login</a></li>
                  <li><a href="register.html">register</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </nav>
      </header>
      {/* header section ends */}

      {/* search filter section starts */}
      <section className="filters" style={{ paddingBottom: '0' }}>
        <form action="" method="post">
          <div id="close-filter"><i className="fas fa-times"></i></div>
          <h3>filter your search</h3>
          <div className="flex">
            <div className="box">
              <p>enter location</p>
              <input type="text" name="location" required maxLength="50" placeholder="enter city name" className="input" />
            </div>
            <div className="box">
              <p>offer type</p>
              <select name="offer" className="input" required>
                <option value="sale">sale</option>
                <option value="resale">resale</option>
                <option value="rent">rent</option>
              </select>
            </div>
            <div className="box">
              <p>property type</p>
              <select name="type" className="input" required>
                <option value="flat">flat</option>
                <option value="house">house</option>
                <option value="shop">shop</option>
              </select>
            </div>
            <div className="box">
              <p>how many BHK</p>
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
              <p>maximum budget</p>
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
              <p>maximum budget</p>
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
            <div className="box">
              <p>status</p>
              <select name="status" className="input" required>
                <option value="ready to move">ready to move</option>
                <option value="under construction">under construction</option>
              </select>
            </div>
            <div className="box">
              <p>furnished</p>
              <select name="furnished" className="input" required>
                <option value="unfurnished">unfurnished</option>
                <option value="furnished">furnished</option>
                <option value="semi-furnished">semi-furnished</option>
              </select>
            </div>
          </div>
          <input type="submit" value="search property" name="search" className="btn" />
        </form>
      </section>
      {/* search filter section ends */}

      <div id="filter-btn" className="fas fa-filter"></div>

      {/* listings section starts */}
      <section className="listings">
        <h1 className="heading">searched results</h1>
        <div className="box-container">
          <div className="box">
            <div className="admin">
              <h3>j</h3>
              <div>
                <p>john deo</p>
                <span>10-11-2022</span>
              </div>
            </div>
            <div className="thumb">
              <p className="total-images">
                <i className="far fa-image"></i><span>4</span>
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
              <i className="fas fa-map-marker-alt"></i><span>andheri, mumbai, india - 401303</span>
            </p>
            <div className="flex">
              <p>
                <i className="fas fa-bed"></i><span>3</span>
              </p>
              <p>
                <i className="fas fa-bath"></i><span>2</span>
              </p>
              <p>
                <i className="fas fa-maximize"></i><span>750sqft</span>
              </p>
            </div>
            <a href="view_property.html" className="btn">view property</a>
          </div>
          <div className="box">
            <div className="admin">
              <h3>j</h3>
              <div>
                <p>john deo</p>
                <span>10-11-2022</span>
              </div>
            </div>
            <div className="thumb">
              <p className="total-images">
                <i className="far fa-image"></i><span>4</span>
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
              <i className="fas fa-map-marker-alt"></i><span>andheri, mumbai, india - 401303</span>
            </p>
            <div className="flex">
              <p>
                <i className="fas fa-bed"></i><span>3</span>
              </p>
              <p>
                <i className="fas fa-bath"></i><span>2</span>
              </p>
              <p>
                <i className="fas fa-maximize"></i><span>750sqft</span>
              </p>
            </div>
            <a href="view_property.html" className="btn">view property</a>
          </div>
          <div className="box">
            <div className="admin">
              <h3>j</h3>
              <div>
                <p>john deo</p>
                <span>10-11-2022</span>
              </div>
            </div>
            <div className="thumb">
              <p className="total-images">
                <i className="far fa-image"></i><span>4</span>
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
              <i className="fas fa-map-marker-alt"></i><span>andheri, mumbai, india - 401303</span>
            </p>
            <div className="flex">
              <p>
                <i className="fas fa-bed"></i><span>3</span>
              </p>
              <p>
                <i className="fas fa-bath"></i><span>2</span>
              </p>
              <p>
                <i className="fas fa-maximize"></i><span>750sqft</span>
              </p>
            </div>
            <a href="view_property.html" className="btn">view property</a>
          </div>
        </div>
      </section>
      {/* listings section ends */}

      {/* footer section starts */}
      <footer className="footer">
        <section className="flex">
          <div className="box">
            <a href="tel:1234567890">
              <i className="fas fa-phone"></i><span>123456789</span>
            </a>
            <a href="tel:1112223333">
              <i className="fas fa-phone"></i><span>1112223333</span>
            </a>
            <a href="mailto:shaikhanas@gmail.com">
              <i className="fas fa-envelope"></i><span>shaikhanas@gmail.com</span>
            </a>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i><span>mumbai, india - 400104</span>
            </a>
          </div>
          <div className="box">
            <a href="home.html"><span>home</span></a>
            <a href="about.html"><span>about</span></a>
            <a href="contact.html"><span>contact</span></a>
            <a href="listings.html"><span>all listings</span></a>
            <a href="#"><span>saved properties</span></a>
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
          &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved!
        </div>
      </footer>
      {/* footer section ends */}
    </div>
  );
}

export default Contact;
