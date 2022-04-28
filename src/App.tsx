import React from 'react';
import { FC } from 'react';
import HeaderBar from './Components/HeaderBar/HeaderBar.tsx';
import SearchBar from './Components/SearchBar/SearchBar.tsx';
import SearchResults from './Components/SearchResults/SearchResults.tsx';

const App: FC = () => {
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
