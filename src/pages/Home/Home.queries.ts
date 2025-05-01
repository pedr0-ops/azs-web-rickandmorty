import {gql} from '@apollo/client';

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        characters {
          id
        }
      }
    }
  }
`;