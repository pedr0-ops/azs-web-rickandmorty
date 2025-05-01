import {
  EpisodesContainer,
  HomeContainer,
  PageNumber,
  PaginationButton,
  PaginationContainer,
  Title,
} from "./Home.styles";
import { useQuery } from "@apollo/client";
import { EpisodesQuery, EpisodesVars } from "./Home.types";
import { GET_EPISODES } from "./Home.queries";
import { useEffect, useState } from "react";
import Card from "./Card/Card";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../contexts/SearchContext/SearchContext";

const Home = () => {
  const [page, setPage] = useState(1);
  const { name } = useSearch();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<EpisodesQuery, EpisodesVars>(
    GET_EPISODES,
    {
      variables: {
        page,
        name: name ? name : undefined,
      },
    }
  );

  const handleCardClick = (id: string) => {
    navigate(`/episode/${id}`);
  };

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

  useEffect(() => {
    setPage(1);
  }, [name]);

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
          <Card
            episode={episode}
            key={episode.id}
            onClick={() => handleCardClick(episode.id)}
          />
        ))}
      </EpisodesContainer>

      <PaginationContainer>
        <PaginationButton
          onClick={handlePrevPage}
          disabled={!data?.episodes.info.prev}
        >
          Página Anterior
        </PaginationButton>

        <PageNumber>Página {page}</PageNumber>

        <PaginationButton
          onClick={handleNextPage}
          disabled={!data?.episodes.info.next}
        >
          Próxima Página
        </PaginationButton>
      </PaginationContainer>
    </HomeContainer>
  );
};

export default Home;
