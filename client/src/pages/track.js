import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { Layout, QueryResult } from "../components"
import TrackDetail from "../components/track-detail";
import { useParams } from "react-router-dom";

const GET_TRACK = gql`
  query getTrack($trackId: ID!)  {
    track (id: $trackId) {
        id
        title
        thumbnail
        length
        modulesCount
        description
        numberOfViews
        author {
            id
            name
            photo
        }
        modules {
            id
            title
            length
        }
    }
  }
`;


const Track = () => {
    const { trackId } = useParams(); 
    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: {trackId}
    });


    return <Layout>
        <QueryResult error={error} loading={loading} data={data}>
            <TrackDetail track={data?.track}/>
      </QueryResult>
    </Layout>;
}

export default Track;