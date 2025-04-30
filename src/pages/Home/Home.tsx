import { EpisodesContainer, HomeContainer, Title } from "./Home.styles";
import { useQuery } from "@apollo/client";
import { EpisodesQuery, EpisodesVars } from "./Home.types";
import { GET_EPISODES } from "./Home.queries";
import { useState } from "react";
import Card from "./Card/Card";

const Home = () => {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery<EpisodesQuery, EpisodesVars>(
    GET_EPISODES,
    {
      variables: { page },
    }
  );

  const handleNextPage = () => {
    console.log("next page", data?.episodes.info.next);
    if (data?.episodes.info.next) {
      setPage(data.episodes.info.next);
    }
  };

  const handlePrevPage = () => {
    console.log("prev page", data?.episodes.info.prev);
    if (data?.episodes.info.prev) {
      setPage(data.episodes.info.prev);
    }
  };

  if (loading)
    return (
      <HomeContainer>
        <Title>Carregando...</Title>
      </HomeContainer>
    );

  if (error)
    return (
      <HomeContainer>
        <Title>Erro ao carregar os episódios</Title>
      </HomeContainer>
    );

  return (
    <HomeContainer>
      <Title>Lista de Episódios</Title>

      <EpisodesContainer>
        {data?.episodes.results.map((episode) => (
          <Card episode={episode} key={episode.id} />
        ))}
      </EpisodesContainer>

      <div style={{ marginTop: "16px" }}>
        <button
          type="button"
          onClick={() => handlePrevPage()}
          disabled={!data?.episodes.info.prev}
        >
          Página Anterior
        </button>
        <span style={{ margin: "0 8px" }}>Página atual: {page}</span>
        <button
          type="button"
          onClick={() => handleNextPage()}
          disabled={!data?.episodes.info.next}
        >
          Próxima Página
        </button>
      </div>
    </HomeContainer>
  );
};

export default Home;
