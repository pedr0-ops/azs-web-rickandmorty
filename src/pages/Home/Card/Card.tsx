import { CardContainer } from "./Card.styles";
import { CardProps } from "./Card.types";

const Card = ({ episode }: CardProps) => {
  return (
    <CardContainer>
      {episode.id} - <strong>{episode.name}</strong> - {episode.air_date}
      <p>{`Personagens ${episode.characters.length}`}</p>
    </CardContainer>
  );
};

export default Card;
