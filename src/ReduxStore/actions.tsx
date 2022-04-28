export const updatePremShows = (premShows) => ({
    type: "UPDATEPREMSHOWS",
    premShows
})

export const updateShowDetailActive = (bool, show) => ({
    type: "UPDATESHOWDETAILACTIVE",
    bool,
    show
})

export const updateSearchShows = (shows) => ({
    type: 'UPDATESEARCHSHOWS',
    shows
})