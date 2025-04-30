import {
  Button,
  CardContainer,
  CardDivider,
  DateInformation,
  InformationContainer,
  SubTitle,
  Title,
} from "./Card.styles";
import { CardProps } from "./Card.types";

const Card = ({ episode }: CardProps) => {
  return (
    <CardContainer>
      <CardDivider>
        <Title> {episode.id.toString().padStart(2, "0")} </Title>
        <InformationContainer>
          <SubTitle>{episode.name}</SubTitle>
          <DateInformation>{episode.air_date}</DateInformation>
          <p>{`Personagens - ${episode.characters.length}`}</p>
        </InformationContainer>
      </CardDivider>

      <Button
        type="button"
        onClick={() => console.log("show details", episode.id)}
      >
        Detalhes
      </Button>
    </CardContainer>
  );
};

export default Card;
