declare global {
    type Store = {
        premShows: Show[],
        searchedShows: Show[],
        searchActive: Boolean
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
        genres: [String]
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