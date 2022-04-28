import React, { useEffect } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import HeaderBar from '../HeaderBar/HeaderBar.tsx';
import SearchBar from '../SearchBar/SearchBar.tsx';
import SearchResults from '../SearchResults/SearchResults.tsx';
import { updatePremShows } from '../../ReduxStore/actions.tsx';
import { getPremieringShows } from '../../Utils/api.tsx';

const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPremShows = async() => {
      const premShows: Show[] = await getPremieringShows();
      dispatch(updatePremShows(premShows));
    }
    getPremShows();
  }, [])

  return (
    <div className="fluid-container">
      <HeaderBar />
      <div className="fluid-container">
        <SearchBar/>
        <SearchResults/>
      </div>
    </div>
  );
};

export default Home;
