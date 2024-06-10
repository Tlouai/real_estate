import React from 'react';
import axios from 'axios';
import { useUserContext } from '../pages/usercontext';

const PropertyCard = ({ property }) => {
  const { state } = useUserContext();

  const handleSave = async () => {
    if (!state.user) {
      alert('You need to be logged in to save properties.');
      return;
    }

    try {
        console.log(property)
        console.log(state.user.id)
      await axios.post('http://localhost:8000/api/likeds', {
        property_id: property.id,
        account_id: state.user.id,
      });
      alert('Property saved successfully');
    } catch (error) {
      console.error('There was an error saving the property!', error);
      alert('Failed to save the property');
    }
  };

  return (
    <div className="box addpadding">
      <div className="admin">
        <h3>{property.initial}</h3>
        {property.liked ? <h1></h1> : <button onClick={handleSave} className="far fa-heart"> Like </button>}
        <div>
          <p>{property.name}</p>
          <span>{property.date}</span>
        </div>
      </div>
      <div className="thumb">
        <p className="total-images">
          <i className="far fa-image"></i><span>{property.totalImages}</span>
        </p>
        <p className="type">
          <span>{property.type}</span><span>{property.saleType}</span>
        </p>
        <img src={property.image} alt="" />
      </div>
      <h3 className="name">{property.propertyName}</h3>
      <p className="location">
        <i className="fas fa-map-marker-alt"></i><span>{property.location}</span>
      </p>
      <div className="flex">
        <p>
          <i className="fas fa-bed"></i><span>{property.bedrooms}</span>
        </p>
        <p>
          <i className="fas fa-bath"></i><span>{property.bathrooms}</span>
        </p>
        <p>
          <i className="fas fa-maximize"></i><span>{property.area} sqft</span>
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
