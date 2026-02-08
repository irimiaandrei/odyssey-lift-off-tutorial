const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
        "Query to get track array for the homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
        trackModules(id: ID!): [Module!]!
    }

    "A track is a group of modules that teaches about a specific topic"
    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's main author"
        author: Author!
        "the track's main illustration to display in track card or track page detail"
        thumbnail: String
        "the track's approximate length to complete, in minutes"
        length: Int
        "the number of modules this track contains"
        modulesCount: Int
        "The track's complete description, can be in markdown format"
        description: String
        "The number of times a track has been viewed"
        numberOfViews: Int
        "The track's complete array of Modules"
        modules: [Module!]!
    }
    
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile pictur URL"
        photo: String
    }

    "A module is a single unit of teaching. Multiple modules compose a track"
    type Module {
        id: ID!
        "The module's title"
        title: String!
        "The module's length in minutes"
        length: Int
    }
`;

module.exports = typeDefs;

