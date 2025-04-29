import { HeaderContainer } from "./Header.styles";
import image from "../../assets/capa.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Rick And Morty</h1>

      <img src={image}alt="capa inicial da série Rick e Morty"/>
    </HeaderContainer>
  );
}

export default Header;