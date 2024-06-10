import React, { useEffect, useState } from 'react';
import PropertyCard from './property_card';
import axios from 'axios';
import SearchBar from './search_box';
import { useUserContext } from './usercontext';

function Contact() {
  const { state, dispatch } = useUserContext();
  const [properties, setProperties] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts')
      .then(response => {
        setProperties(response.data);
        console.log(state.user.firstname);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, []);

  
  function logout() {
    dispatch({ type: 'LOGOUT'});
  }

  return (
    <div className="header">
      {/* header section starts */}
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <a href="/" className="logo">
              <i className="fas fa-house"></i>MyHome
            </a>
            <ul>
              <li>
                <a href="post">post property<i className="fas fa-paper-plane"></i></a>
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
                  <ul>
                    <li><a href="#">house</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">ready to move</a></li>
                    <li><a href="#">furnished</a></li>
                  </ul>
                </li>
                <li>
                  <a href="post">
                    post property<i className="fas fa-angle-down"></i>
                  </a>
                  <ul>
                    <li><a href="post">post property</a></li>
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
      {/* header section ends */}

      {/* search filter section starts */}
      {/* search filter section ends */}

      <div id="filter-btn" className="fas fa-filter"></div>

      {/* listings section starts */}
      <section className="listings">
        <h1 className="heading">searched results</h1>

        <SearchBar onSearchResults={setSearchResults} />
        <div className="box-container">
          {searchResults.length > 0 ? searchResults.map(property => (
            <PropertyCard key={property.id} property={{
              id: property.id,
              initial: property.name.charAt(0).toUpperCase(),
              name: property.name,
              date: property.created_at, // This can be replaced with actual data
              totalImages: 4, // This can be replaced with actual data
              type: property.name, // This can be replaced with actual data
              saleType: property.sell_or_rent,
              image: property.pictures, // This can be replaced with actual data
              propertyName: property.name,
              location: property.address, // This can be replaced with actual data
              bedrooms: 3, // This can be replaced with actual data
              bathrooms: 2, // This can be replaced with actual data
              area: property.size // This can be replaced with actual data
            }} />
          )) : properties.map(property => (
            <PropertyCard key={property.id} property={{
              initial: property.name.charAt(0).toUpperCase(),
              id: property.id,
              name: property.name,
              date: property.created_at, // This can be replaced with actual data
              totalImages: 4, // This can be replaced with actual data
              type: property.name, // This can be replaced with actual data
              saleType: property.sell_or_rent,
              image: property.pictures, // This can be replaced with actual data
              propertyName: property.name,
              location: property.address, // This can be replaced with actual data
              bedrooms: 3, // This can be replaced with actual data
              bathrooms: 2, // This can be replaced with actual data
              area: property.size // This can be replaced with actual data
            }} />
          ))}
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
            <a href="/"><span>home</span></a>
            <a href="about"><span>about</span></a>
            <a href="contact"><span>contact</span></a>
            <a href="listings"><span>all listings</span></a>
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
          &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved!
        </div>
      </footer>
      {/* footer section ends */}
    </div>
  );
}

export default Contact;
