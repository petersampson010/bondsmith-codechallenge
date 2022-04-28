import React from 'react';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux'
import Home from './Components/Home/Home.tsx';
import rootReducer from './ReduxStore/rootReducer.tsx';

const App: FC = () => {
  
  const store = legacy_createStore(rootReducer)

  return (
      <Provider store={store}>
        <Home/>
      </Provider>
  );
};

export default App;
