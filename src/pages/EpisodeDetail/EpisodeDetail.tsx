import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_EPISODE_BY_ID } from "./EpisodeDetail.queries";
import { EpisodeQuery, EpisodeVars, StatusEnum } from "./EpisodeDetail.types";
import {
  EpisodeContainer,
  Header,
  EpisodeCode,
  EpisodeTitle,
  AirDate,
  CharacterList,
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  CharacterMeta,
  StatusAlive,
  StatusDead,
  TopBar,
  MarkSeenButton,
} from "./EpisodeDetail.styles";

const EpisodeDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery<EpisodeQuery, EpisodeVars>(
    GET_EPISODE_BY_ID,
    {
      variables: { id: id ?? "" },
    }
  );

  if (loading)
    return (
      <EpisodeContainer>
        <EpisodeTitle>Carregando...</EpisodeTitle>
      </EpisodeContainer>
    );
  if (error)
    return (
      <EpisodeContainer>
        <EpisodeTitle>Erro ao carregar o episódio</EpisodeTitle>
      </EpisodeContainer>
    );
  if (!data)
    return (
      <EpisodeContainer>
        <EpisodeTitle>Episódio não encontrado</EpisodeTitle>
      </EpisodeContainer>
    );

  const { episode } = data;

  return (
    <EpisodeContainer>
      <TopBar>
        <Header>
          <EpisodeCode>{episode.id.padStart(2, "0")}</EpisodeCode>
          <div>
            <EpisodeTitle>{episode.name}</EpisodeTitle>
            <AirDate>{episode.air_date}</AirDate>
          </div>
        </Header>
        <MarkSeenButton>Marcar como visto</MarkSeenButton>
      </TopBar>

      <CharacterList>
        {episode.characters.map((char) => {
          const isAlive = char.status === StatusEnum.Alive;

          return (
            <CharacterCard key={char.id}>
              <CharacterImage
                src={char.image}
                alt={char.name}
                isAlive={isAlive}
              />
              <CharacterInfo>
                <CharacterName isAlive={isAlive}>{char.name}</CharacterName>
                <CharacterMeta>
                  Espécie: <strong>{char.species}</strong>
                </CharacterMeta>
                <CharacterMeta>
                  Status:{" "}
                  {isAlive ? (
                    <StatusAlive>Vivo(a)</StatusAlive>
                  ) : (
                    <StatusDead>Morto(a)</StatusDead>
                  )}
                </CharacterMeta>
              </CharacterInfo>
            </CharacterCard>
          );
        })}
      </CharacterList>
    </EpisodeContainer>
  );
};

export default EpisodeDetail;
