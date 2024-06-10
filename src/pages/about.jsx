import React from 'react';
import { useUserContext } from './usercontext';

function About() {
  const { state, dispatch } = useUserContext();

  function logout() {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <div>
      {/* Header section starts here */}
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <a href="/home" className="logo"><i className="fas fa-house"></i>MyHome</a>
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
                    <li><a href="/about">about us</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <ul>
              <li><a href="#">saved <i className="far fa-heart"></i></a></li>
              <li><a href="#">account <i className="fas fa-angle-down"></i></a>
                <ul>
                  <li><a href="/login">login</a></li>
                  <li><a href="/register">register</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </nav>
      </header>

      {/* About section starts */}
      <section className="about">
        <div className="row">
          <div className="image">
            <img src="images/about-img.svg" alt="About Us" />
          </div>
          <div className="content">
            <h3>why choose us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem provident voluptatum distinctio laborum veritatis vitae suscipit praesentium fugiat unde?</p>
          </div>
        </div>
      </section>

      {/* Steps section starts */}
      <section className="steps">
        <h1 className="heading">3 simple steps</h1>
        <div className="box-container">
          <div className="box">
            <img src="images/step-1.png" alt="Step 1" />
            <h3>search property</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat.</p>
          </div>

          <div className="box">
            <img src="images/step-2.png" alt="Step 2" />
            <h3>contact agents</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat.</p>
          </div>

          <div className="box">
            <img src="images/step-3.png" alt="Step 3" />
            <h3>enjoy property</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat.</p>
          </div>
        </div>
      </section>

      {/* Reviews section starts */}
      <section className="reviews">
        <h1 className="heading">client's reviews</h1>
        <div className="box-container">
          <div className="box">
            <div className="user">
              <img src="images/pic-1.png" alt="Client 1" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptates delectus distinctio quam sequi error eum suscipit tempore inventore ex!</p>
          </div>

          <div className="box">
            <div className="user">
              <img src="images/pic-2.png" alt="Client 2" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptates delectus distinctio quam sequi error eum suscipit tempore inventore ex!</p>
          </div>

          <div className="box">
            <div className="user">
              <img src="images/pic-3.png" alt="Client 3" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptates delectus distinctio quam sequi error eum suscipit tempore inventore ex!</p>
          </div>

          <div className="box">
            <div className="user">
              <img src="images/pic-4.png" alt="Client 4" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptates delectus distinctio quam sequi error eum suscipit tempore inventore ex!</p>
          </div>

          <div className="box">
            <div className="user">
              <img src="images/pic-5.png" alt="Client 5" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptates delectus distinctio quam sequi error eum suscipit tempore inventore ex!</p>
          </div>

          <div className="box">
            <div className="user">
              <img src="images/pic-6.png" alt="Client 6" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptates delectus distinctio quam sequi error eum suscipit tempore inventore ex!</p>
          </div>
        </div>
      </section>

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
            <a href="/home"><span>home</span></a>
            <a href="/about"><span>about</span></a>
            <a href="/listings"><span>all listings</span></a>
            <a href="#"><span>saved properties</span></a>
          </div>

          <div className="box">
            <a href="#"><span>facebook</span><i className="fab fa-facebook-f"></i></a>
            <a href="#"><span>twitter</span><i className="fab fa-twitter"></i></a>
            <a href="#"><span>linkedin</span><i className="fab fa-linkedin"></i></a>
            <a href="#"><span>instagram</span><i className="fab fa-instagram"></i></a>
          </div>
        </section>

        <div className="credit">&copy; copyright @ 2024 by <span>Mr. Louai</span> | all rights reserved!</div>
      </footer>
    </div>
  );
}

export default About;
