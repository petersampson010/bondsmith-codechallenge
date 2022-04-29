export const updatePremShows = (premShows: Show[]) => ({
    type: "UPDATEPREMSHOWS",
    premShows
})

export const updateShowDetailActive = (bool: Boolean, show: Show) => ({
    type: "UPDATESHOWDETAILACTIVE",
    bool,
    show
})

export const updateSearchShows = (shows: Show[]) => ({
    type: 'UPDATESEARCHSHOWS',
    shows
})