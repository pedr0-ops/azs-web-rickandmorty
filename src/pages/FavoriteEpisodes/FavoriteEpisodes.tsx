import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { EpisodesContainer, HomeContainer, Title } from "../Home/Home.styles";
import Card from "../../components/Card/Card";

const FavoriteEpisodes = () => {
  const navigate = useNavigate();

  const favoriteEpisodes = useSelector(
    (state: RootState) => state.episodes.favorites
  );

  const handleCardClick = (id: string) => {
    navigate(`/episode/${id}`);
  };

  return (
    <HomeContainer>
      <Title>Episódios Favoritos</Title>

      <EpisodesContainer>
        {favoriteEpisodes.length > 0 ? (
          favoriteEpisodes.map((episode) => (
            <Card
              key={episode.id}
              episode={episode}
              onClick={() => handleCardClick(episode.id)}
            />
          ))
        ) : (
          <h2>Você ainda não tem episódios favoritos.</h2>
        )}
      </EpisodesContainer>
    </HomeContainer>
  );
};

export default FavoriteEpisodes;
