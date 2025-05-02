import { Episode } from "../../pages/Home/Home.types";
export interface CardProps {
  episode: Episode;
  showFavoriteAction?: boolean;
  isFavorite?: boolean;
  watched?: boolean;
  onFavoriteClick?: () => void;
  onClick: () => void;
}