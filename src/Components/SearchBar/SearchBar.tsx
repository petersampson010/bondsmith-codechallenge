import React from 'react';
import { FC } from 'react';
import SearchBox from '../SearchBox/SearchBox.tsx';
import './SearchBar.scss';

const SearchBar: FC = () => {
  return (
    <div className='fluid-container head-bar-cont'>
        <div className='container search-bar-cont p-4'>
            <h2>Sav State</h2>
            <SearchBox/>
        </div>
    </div>
  );
};

export default SearchBar;