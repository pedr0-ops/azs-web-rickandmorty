import {gql} from '@apollo/client';

export const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($id: ID!) {
  episode(id: $id) {
    id
    name
    air_date
    characters {
      id
      image
      name
      species
      status
    }
  }
}
`;