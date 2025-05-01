import {
  EpisodesContainer,
  HomeContainer,
  PageNumber,
  PaginationButton,
  PaginationContainer,
  Title,
} from "./Home.styles";
import { useQuery } from "@apollo/client";
import { Episode, EpisodesQuery, EpisodesVars } from "./Home.types";
import { GET_EPISODES } from "./Home.queries";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../contexts/SearchContext/SearchContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addFavorite,
  removeFavorite,
} from "../../store/episodes/episodesSlice";
import Card from "../../components/Card/Card";

const Home = () => {
  const [page, setPage] = useState(1);
  const { name } = useSearch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favoriteEpisodes, watchedEpisodes } = useSelector(
    (state: RootState) => {
      return {
        favoriteEpisodes: state.episodes.favorites,
        watchedEpisodes: state.episodes.watched,
      };
    }
  );

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
    if (data?.episodes.info.next) {
      setPage(data.episodes.info.next);
    }
  };

  const handlePrevPage = () => {
    if (data?.episodes.info.prev) {
      setPage(data.episodes.info.prev);
    }
  };

  const handleFavoriteClick = (episode: Episode) => {
    if (favoriteEpisodes.some((e) => e.id === episode.id)) {
      dispatch(removeFavorite(episode.id));
    } else {
      dispatch(addFavorite(episode));
    }
  };

  const isEpisodeFavorite = (episode: Episode) => {
    return favoriteEpisodes.some((e) => e.id === episode.id);
  };

  const isEpisodeWatched = (episode: Episode) => {
    return watchedEpisodes.some((e) => e.id === episode.id);
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
            key={episode.id}
            episode={episode}
            onClick={() => handleCardClick(episode.id)}
            showFavoriteAction
            onFavoriteClick={() => handleFavoriteClick(episode)}
            isFavorite={isEpisodeFavorite(episode)}
            watched={isEpisodeWatched(episode)}
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
