import React from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { updateShowDetailActive } from '../../ReduxStore/actions.tsx';
import ShowCard from '../ShowCard/ShowCard.tsx';
import './SearchResults.scss';

const SearchResults: FC = () => {

    const dispatch = useDispatch(),
     searchedShows = useSelector((state: Store) => state.searchedShows),
    searchActive = useSelector((state: Store) => state.searchActive),
    premShows = useSelector((state: Store) => state.premShows);

    console.log(searchedShows);

  return (
        <div className="container search-results-cont">
            {searchActive ? searchedShows.map(x => <ShowCard show={x}/>) : premShows.map(x => <ShowCard show={x}/>)}
        </div>
  );
};

export default SearchResults;