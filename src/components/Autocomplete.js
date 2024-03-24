import React, { useState } from 'react';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function Autocomplete() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    
    // Filter fruits based on input value
    const filteredFruits = fruits.filter(fruit =>
      fruit.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredFruits);
  };

  return (
    <div>
      <h2>Autocomplete Search</h2>
      <input 
        type="text" 
        placeholder="Type to search..." 
        value={searchTerm} 
        onChange={handleChange} 
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
