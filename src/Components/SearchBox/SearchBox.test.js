import React from "react";
import { render, queryByTestId, fireEvent } from '@testing-library/react';
import SearchBox from "./SearchBox";
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux'
import rootReducer from '../../ReduxStore/rootReducer.tsx';
const store = legacy_createStore(rootReducer)

describe('ShowDetail Component Test', () => {
    test('matches snapshot', () => {
        const { container } = render(<Provider store={store}><SearchBox/></Provider>);
        expect(container).toMatchSnapshot();
    });
    test('debounce functionality is working', () => {
        const { queryByTestId } = render(<Provider store={store}><SearchBox/></Provider>);
        const searchInput = queryByTestId('search-input');
        fireEvent.change(searchInput, {target: {value:  "Batman"}});
        expect(window.location.search).toEqual("");
    });
    test('URL updates with search input', async() => {
        const { queryByTestId } = render(<Provider store={store}><SearchBox/></Provider>);
        const searchInput = queryByTestId('search-input');
        fireEvent.change(searchInput, {target: {value:  "Batman"}});
        await new Promise((r) => setTimeout(r, 2000));
        expect(window.location.search.split('=')[1]).toEqual("Batman");
    });
})