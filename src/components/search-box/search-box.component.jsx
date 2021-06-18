import React from 'react';


export const SearchBox = ({ placeholder, handleChange }) => (
    <input className = 'searchMonsters'
    type = 'search' placeholder = {placeholder} onChange = {handleChange}
    />
)