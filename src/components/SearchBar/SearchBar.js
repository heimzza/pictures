import React from 'react';
import './searchbar.css'

const SearchBar = () => {
    return (
        <div className="search-bar-container ui input">
            <input type="text" placeholder="Search..."/>
        </div>
    );
};

export default SearchBar;