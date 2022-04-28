import { Reducer } from '@reduxjs/toolkit'

export const initialState = {
    premShows: [],
    searchedShows: [],
    searchActive: false
}

const rootReducer: Reducer<{}> = (state=initialState, action) => {
    switch(action.type) {
        case "UPDATEPREMSHOWS":
            return {
                ...state, 
                premShows: action.premShows
            }
        default:
            return state;
    }
}

export default rootReducer;