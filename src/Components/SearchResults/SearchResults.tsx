import React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import ShowCard from '../ShowCard/ShowCard.tsx';
import './SearchResults.scss';

const SearchResults: FC = () => {

    const searchedShows = useSelector((state: Store) => state.searchedShows),
    searchActive = useSelector((state: Store) => state.searchActive),
    premShows = useSelector((state: Store) => state.premShows);

console.log(searchedShows);
  return (
    <div className="container search-results-cont">
        {searchActive ? [1,2,3,4,5,6,7].map(x => <ShowCard/>) : [1,2,3,4,5,6,7].map(x => <ShowCard/>)}
    </div>
  );
};

export default SearchResults;