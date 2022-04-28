import React, { useEffect } from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderBar from '../HeaderBar/HeaderBar.tsx';
import SearchBar from '../SearchBar/SearchBar.tsx';
import SearchResults from '../SearchResults/SearchResults.tsx';
import { updatePremShows } from '../../ReduxStore/actions.tsx';
import { getPremieringShows } from '../../Utils/api.tsx';
import ShowDetail from '../ShowDetail/ShowDetail.tsx';

const Home: FC = () => {
  const dispatch = useDispatch(),
  showDetailActive = useSelector((state: Store) => state.showDetailActive);

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
        {showDetailActive ? <ShowDetail/> : <SearchResults/>}
      </div>
    </div>
  );
};

export default Home;
