import React from 'react';

function Home() {
  return (
    <>
      <div className="header">
        {/* Header section starts here */}
        <header className="header">
          <nav className="navbar nav-1">
            <section className="flex">
              <a href="/" className="logo"><i className="fas fa-house"></i>MyHome</a>
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
                  <li><a href="#">sell<i className="fas fa-angle-down"></i></a>
                    <ul>
                      <li><a href="#">post property</a></li>
                      <li><a href="#">post dashboard</a></li>
                    </ul>
                  </li>
                  <li><a href="#">rent<i className="fas fa-angle-down"></i></a>
                    <ul>
                      <li><a href="#">house</a></li>
                      <li><a href="#">flat</a></li>
                      <li><a href="#">shop</a></li>
                    </ul>
                  </li>
                  <li><a href="#">help<i className="fas fa-angle-down"></i></a>
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
                <li><a href="#">account<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="login">login</a></li>
                    <li><a href="register">login</a></li>
                  </ul>
                </li>
              </ul>
            </section>
          </nav>
        </header>
        {/* header section ends */}
      </div>
      
      <div className="home">
        <section className="center">
          <form action="search" method="post">
            <h3>find your perfect home</h3>
            <div className="box">
              <p>enter location <span>*</span></p>
              <input type="text" name="location" required maxLength="50" placeholder="enter city name" className="input" />
            </div>
            <div className="flex">
              <div className="box">
                <p>property type <span>*</span></p>
                <select name="type" className="input" required>
                  <option value="flat">flat</option>
                  <option value="house">house</option>
                  <option value="shop">shop</option>
                </select>
              </div>
              <div className="box">
                <p>how many BHK <span>*</span></p>
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
                <p>minimum budget <span>*</span></p>
                <select name="minimum" className="input" required>
                  <option value="5000000">5 lac</option>
                  <option value="1000000">10 lac</option>
                  <option value="2000000">20 lac</option>
                  <option value="3000000">30 lac</option>
                  <option value="4000000">40 lac</option>
                  {/* Add more options */}
                </select>
              </div>
              <div className="box">
                <p>maximum budget <span>*</span></p>
                <select name="maximum" className="input" required>
                  <option value="5000000">5 lac</option>
                  <option value="1000000">10 lac</option>
                  <option value="2000000">20 lac</option>
                  <option value="3000000">30 lac</option>
                  <option value="4000000">40 lac</option>
                  {/* Add more options */}
                </select>
              </div>
            </div>
            <input type="submit" value="search property" name="search" className="btn" />
          </form>
        </section>
      </div>

      {/* Services section */}
      <section className="services">
        {/* Content goes here */}
      </section>

      {/* Listings section */}
      <section className="listings">
        {/* Content goes here */}
      </section>

      {/* Footer section */}
      <footer className="footer">
        {/* Content goes here */}
      </footer>
    </>
  );
}

export default Home;
