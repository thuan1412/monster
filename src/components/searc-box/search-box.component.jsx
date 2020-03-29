import React from 'react';

import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className='search'
            type='search'
            onChange={handleChange}
        />
    )
}