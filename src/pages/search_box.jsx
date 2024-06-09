import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8000/api/search?query=${query}`);
      onSearchResults(response.data);
    } catch (error) {
      console.error('There was an error fetching the search results!', error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Search properties..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;