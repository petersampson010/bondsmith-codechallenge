import React, { useEffect } from 'react';
import { FC } from 'react';
import HeaderBar from './Components/HeaderBar/HeaderBar.tsx';
import SearchBar from './Components/SearchBar/SearchBar.tsx';
import SearchResults from './Components/SearchResults/SearchResults.tsx';
import { getPremieringShows } from './Utils/api.tsx';

const App: FC = () => {

  useEffect(() => {
    const getPremShows = async() => {
      const allShowsToday: Show[] = await getPremieringShows();
      console.log(allShowsToday);
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

export default App;
