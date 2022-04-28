declare global {
    type Store = {
        premShows: Show[],
        searchedShows: Show[],
        searchActive: Boolean,
        showDetailActive: Boolean,
        showActive: Show
    }

    type ShowDetail = {
        genres: [String]
        image: {
            medium: String,
            original: String
        }
        language: "English"
        name: "The Big Design Challenge"
        network: {
            name: String
        }
        premiered: String
        status: String
        officialSite: String
        rating: {
            average: number
        }
        runtime: number
        summary: String
        type: String
    }
    
    type Show = {
        show: ShowDetail
        season: Number
        image: String
        language: String
        name: String
        network: {
            name: String
        }
        summary: String
        type: String
    }
}

export  {}