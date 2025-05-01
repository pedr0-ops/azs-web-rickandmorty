import {
  ActionContainer,
  Button,
  CardContainer,
  CardDivider,
  CardStatus,
  DateInformation,
  HeartFilledCustom,
  HeartIconCustom,
  IconButton,
  InformationContainer,
  SubTitle,
  Title,
  TitleContainer,
} from "./Card.styles";
import { CardProps } from "./Card.types";

const Card = ({
  episode,
  showFavoriteAction = false,
  isFavorite = false,
  watched = false,
  onFavoriteClick,
  onClick,
}: CardProps) => {
  return (
    <CardContainer>
      <CardDivider>
        <Title> {episode.id.toString().padStart(2, "0")} </Title>

        <InformationContainer>
          <TitleContainer>
            <SubTitle>{episode.name}</SubTitle>
            {watched && <CardStatus>VISTO</CardStatus>}
          </TitleContainer>
          <DateInformation>{episode.air_date}</DateInformation>
          <p>{`Personagens - ${episode.characters.length}`}</p>
        </InformationContainer>
      </CardDivider>

      <ActionContainer>
        {showFavoriteAction && (
          <IconButton
            type="button"
            onClick={() => {
              onFavoriteClick?.();
            }}
          >
            {isFavorite ? <HeartFilledCustom /> : <HeartIconCustom />}
          </IconButton>
        )}
        <Button type="button" onClick={() => onClick()}>
          Detalhes
        </Button>
      </ActionContainer>
    </CardContainer>
  );
};

export default Card;
