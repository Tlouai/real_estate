import React from 'react';
import { useUserContext } from './usercontext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './search_box';
import PropertyCard from './property_card';

function Home() {
  const { state, dispatch } = useUserContext();
  const [properties, setProperties] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts')
      .then(response => {
        setProperties(response.data);
        console.log(state.user.firstname)
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, []);

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
                  <li><a href="#">add<i className="fas fa-angle-down"></i></a>
                    <ul>
                      <li><a href="#">house</a></li>
                      <li><a href="#">flat</a></li>
                      <li><a href="#">shop</a></li>
                      <li><a href="#">ready to move</a></li>
                      <li><a href="#">furnished</a></li>
                    </ul>
                  </li>
                  <li><a href="#">post property<i className="fas fa-angle-down"></i></a>
                    <ul>
                      <li><a href="#">post property</a></li>
                      <li><a href="#">post dashboard</a></li>
                    </ul>
                  </li>
                  <li><a href="#">help<i className="fas fa-angle-down"></i></a>
                    <ul>
                      <li><a href="about">about us</a></li>
                      <li><a href="contact">Search</a></li>
                      <li><a href="about#faq">FAQ</a></li>
                    </ul>
                  </li>
                  <li><a href="#">all listings<i className="fas fa-angle-down"></i></a>
                    <ul>
                      <li><a href="#">house</a></li>
                      <li><a href="#">flat</a></li>
                      <li><a href="#">shop</a></li>
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
                    </div> : <a href="/">{state.user.firstname}<i className="far fa-heart"></i></a>}
                </li>
              </ul>
            </section>
          </nav>
        </header>
        {/* header section ends */}
      </div>

      <div className="home">
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
