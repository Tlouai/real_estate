import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './search_box';
import { useUserContext } from './usercontext';
import PropertyCardLiked from './property_card liked';



function Search() {
  const { state , dispatch } = useUserContext();
  const [properties, setProperties] = useState([]);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (state.user) {
      axios.get(`http://localhost:8000/api/likeds?account_id=${state.user.id}`)
        .then(response => {
          setProperties( response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.error('There was an error fetching the liked properties!', error);
        });
    }
  }, [state.user]);

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
                    <li><a href="about">about us</a></li>
                    <li><a href="contact">Search</a></li>
                    <li><a href="contact#faq">FAQ</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <a href="likes">saved <i className="far fa-heart"></i></a>
              </li>
              <li>
              {state.user.firstname == null ?
                <div>
                <a href="#">
                  account <i className="fas fa-angle-down"></i>
                </a>
                <ul>
                  <li><a href="login">login</a></li>
                  <li><a href="register">register</a></li>
                </ul>
                </div> : state.user.firstname}
              </li>
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
        <h1 className="heading">saved results</h1>

        <div className="box-container">
        {properties.length > 0 ? properties.map(property => (
          <PropertyCardLiked key={property.property.id} property={{
            liked: true,
            id: property.property.id,
            initial: '',
            name: property.property.name,
            date: property.property.created_at, // This can be replaced with actual data
            totalImages: 4, // This can be replaced with actual data
            type: property.property.name, // This can be replaced with actual data
            saleType: property.property.sell_or_rent,
            image: property.property.pictures, // This can be replaced with actual data
            propertyName: property.property.name,
            location: property.property.address, // This can be replaced with actual data
            bedrooms: 3, // This can be replaced with actual data
            bathrooms: 2, // This can be replaced with actual data
            area: property.property.size // This can be replaced with actual data
          }} />
        )) : properties.map(property => (
          <PropertyCardLiked key={property.id} property={{
            liked: true,
            id: property.property.id,
            initial: '',
            name: property.property.name,
            date: property.property.created_at, // This can be replaced with actual data
            totalImages: 4, // This can be replaced with actual data
            type: property.property.name, // This can be replaced with actual data
            saleType: property.property.sell_or_rent,
            image: property.property.pictures, // This can be replaced with actual data
            propertyName: property.property.name,
            location: property.property.address, // This can be replaced with actual data
            bedrooms: 3, // This can be replaced with actual data
            bathrooms: 2, // This can be replaced with actual data
            area: property.property.size// This can be replaced with actual data
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

export default Search;
