import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_EPISODE_BY_ID } from "./EpisodeDetail.queries";
import { EpisodeQuery, EpisodeVars } from "./EpisodeDetail.types";
import { EpisodeContainer } from "./EpisodeDetail.styles";

const EpisodeDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery<EpisodeQuery, EpisodeVars>(
    GET_EPISODE_BY_ID,
    {
      variables: { id: id ?? "" },
    }
  );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao buscar episódio</p>;
  if (!data) return <p>Nenhum dado encontrado</p>;

  const { episode } = data;

  return (
    <EpisodeContainer>
      <h1>{episode.name}</h1>
      <p>Data de exibição: {episode.air_date}</p>

      <h2>Personagens</h2>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {episode.characters.map((char) => (
          <li key={char.id} style={{ listStyle: "none", textAlign: "center" }}>
            <img src={char.image} alt={char.name} width={120} />
            <div>{char.name}</div>
            <small>
              {char.species} - {char.status}
            </small>
          </li>
        ))}
      </ul>
    </EpisodeContainer>
  );
};

export default EpisodeDetail;
