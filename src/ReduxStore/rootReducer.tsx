import { Reducer } from '@reduxjs/toolkit'

export const initialState = {
    premShows: [],
    searchedShows: [],
    searchActive: false,
    showDetailActive: false,
    showActive: null
}

const rootReducer: Reducer<{}> = (state=initialState, action) => {
    switch(action.type) {
        case "UPDATEPREMSHOWS":
            return {
                ...state, 
                premShows: action.premShows
            }
        case "UPDATESHOWDETAILACTIVE":
            return {
                ...state, 
                showDetailActive: action.bool,
                showActive: action.show
            }
        default:
            return state;
    }
}

export default rootReducer;