
import { HomeContainer } from "./Home.styles";
import { useQuery} from '@apollo/client';
import { EpisodesQuery, EpisodesVars } from "./Home.types";
import { GET_EPISODES } from "./Home.queries";
import { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);

  
  const { data, loading, error } = useQuery<EpisodesQuery, EpisodesVars >(GET_EPISODES, {
    variables: { page },
  });

  const handleNextPage = () => {
    console.log('next page', data?.episodes.info.next);
    if (data?.episodes.info.next) {
      setPage(data.episodes.info.next);
    }
  };

  const handlePrevPage = () => {
    console.log('prev page', data?.episodes.info.prev);
    if (data?.episodes.info.prev) {
      setPage(data.episodes.info.prev);
    }
  };



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;



  return (
    <HomeContainer>
     

      <h1>Home</h1>
      <p>Welcome to the home page!</p>

      <ul>
        {data?.episodes.results.map((episode) => (
          <li key={episode.id}>
            <strong>{episode.name}</strong> - {episode.air_date}
           
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '16px' }}>
        <button type="button" onClick={()=>handlePrevPage()} disabled={!data?.episodes.info.prev}>
          Página Anterior
        </button>
        <span style={{ margin: '0 8px' }}>Página atual: {page}</span>
        <button type="button" onClick={()=>handleNextPage()} disabled={!data?.episodes.info.next}>
          Próxima Página
        </button>
      </div>
    </HomeContainer>
  );
}

export default Home;