import React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import ShowCard from '../ShowCard/ShowCard.tsx';
import './SearchResults.scss';

const SearchResults: FC = () => {

     const searchedShows = useSelector((state: Store) => state.searchedShows),
    searchActive = useSelector((state: Store) => state.searchActive),
    premShows = useSelector((state: Store) => state.premShows);

  return (
        <div className="container search-results-cont">
            {searchActive ? searchedShows.map(x => <ShowCard show={x}/>) : premShows.map(x => <ShowCard show={x}/>)}
        </div>
  );
};

export default SearchResults;