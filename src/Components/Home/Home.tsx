import React, { useEffect } from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderBar from '../HeaderBar/HeaderBar.tsx';
import SearchBar from '../SearchBar/SearchBar.tsx';
import SearchResults from '../SearchResults/SearchResults.tsx';
import { updatePremShows } from '../../ReduxStore/actions.tsx';
import { getPremieringShows } from '../../Utils/api.tsx';
import ShowDetail from '../ShowDetail/ShowDetail.tsx';
import { getSearchedShows } from '../../Utils/api.tsx';
import { updateSearchShows } from '../../ReduxStore/actions.tsx';

const Home: FC = () => {
  const dispatch = useDispatch(),
  showDetailActive = useSelector((state: Store) => state.showDetailActive);

  useEffect(() => {
    const checkUrl = () => {
        const urlSearch = window.location.search.split('=')[1];
        console.log(urlSearch);
        urlSearch ? setPremShows() : setSearchedShows(urlSearch);
    }
    const setPremShows = async() => {
        const premShows: Show[] | {error: any} = await getPremieringShows();
        dispatch(updatePremShows(premShows));
    }
    const setSearchedShows = async(search) => {
        const searchedShows: Show[] | {error: any} = await getSearchedShows(search);
        dispatch(updateSearchShows(searchedShows));
    }
    checkUrl();
  }, [])

  return (
    <div className="fluid-container">
      <HeaderBar />
      <div className="fluid-container">
        <SearchBar/>
        {showDetailActive ? <ShowDetail/> : <SearchResults/>}
      </div>
    </div>
  );
};

export default Home;
