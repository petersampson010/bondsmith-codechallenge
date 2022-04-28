import { Reducer } from '@reduxjs/toolkit'

export const initialState = {
    premShows: [],
    searchedShows: [],
    searchActive: false,
    showDetailActive: false,
    activeShow: null
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
                activeShow: action.show
            }
        case 'UPDATESEARCHSHOWS':
            return {
                ...state, 
                searchedShows: action.shows,
                searchActive: true,
                showDetailActive: false,
                activeShow: null
            }
        default:
            return state;
    }
}

export default rootReducer;