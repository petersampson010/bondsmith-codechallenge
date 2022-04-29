import React, { useState, useCallback } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchShows } from '../../ReduxStore/actions.tsx';
import { getSearchedShows } from '../../Utils/api.tsx';
const _ = require('lodash');

const SearchBox: FC = () => {

    const dispatch = useDispatch(),
    [searchEntry, updateSearchEntry] = useState('');

    const handleDebounceFn = async(inputValue: String) => {
        window.history.replaceState({}, document.title, '?search=' + inputValue);
        const shows = await getSearchedShows(inputValue);
        dispatch(updateSearchShows(shows));
    }
    
    const debounceFn = useCallback(_.debounce(handleDebounceFn, 400), []);

    const handleChange = (e) => {
        updateSearchEntry(e.target.value);
        debounceFn(e.target.value);
    }

    return (
        <div>
            <input data-testid="search-input" type="text" placeholder="Search any shows here" value={searchEntry} onChange={handleChange}/>
        </div>
    );
};

export default SearchBox;