import React, { useState } from 'react';
import { useUserContext } from '../pages/usercontext';
import axios from 'axios';

const PostProperty = () => {
  const { state, dispatch } = useUserContext();
  const [property, setProperty] = useState({
    size: '',
    name: '',
    address: '',
    pictures: '',
    phone_number: '',
    sell_or_rent: 'sell' // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value
    });
  };

  
  function logout() {
    dispatch({ type: 'LOGOUT'});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.user) {
      alert('You need to be logged in to post properties.');
      return;
    }

    
    try {
      console.log(property)
      const response = await axios.post('http://localhost:8000/api/posts', {
        ...property,
        account_id: state.user.id
      });
      alert('Property posted successfully');
    } catch (error) {
      console.log(state.user.id)
      console.error('There was an error posting the property!', error);
      alert('Failed to post the property');
    }
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <a href="/" className="logo"><i className="fas fa-house"></i>MyHome</a>
            <ul>
              <li><a href="post">post property<i className="fas fa-paper-plane"></i></a></li>
            </ul>
          </section>
        </nav>
        
        <nav className="navbar nav-2">
          <section className="flex">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div className="menu">
              <ul>
                <li>
                  <a href="post">post property<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="post">post property</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">help<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="about">about us</a></li>
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
      <div className="form-container addpadding">
        <form onSubmit={handleSubmit}>
          <h3>Post a Property</h3>
          <input 
            type="text" 
            name="size" 
            required 
            maxLength="50" 
            placeholder="Enter property size" 
            className="box" 
            value={property.size} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="name" 
            required 
            maxLength="50" 
            placeholder="Enter property name" 
            className="box" 
            value={property.name} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="address" 
            required 
            maxLength="100" 
            placeholder="Enter property address" 
            className="box" 
            value={property.address} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="pictures" 
            required 
            maxLength="1000" 
            placeholder="Enter image URL" 
            className="box" 
            value={property.pictures} 
            onChange={handleChange} 
          />
          <input 
            type="tel" 
            name="phone_number" 
            required 
            maxLength="20" 
            placeholder="Enter phone number" 
            className="box" 
            value={property.phone_number} 
            onChange={handleChange} 
          />
          <select name="sell_or_rent" value={property.sell_or_rent} onChange={handleChange} className="box" required>
            <option value="sell">Sell</option>
            <option value="rent">Rent</option>
          </select>
          <input type="submit" value="Post Property" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default PostProperty;