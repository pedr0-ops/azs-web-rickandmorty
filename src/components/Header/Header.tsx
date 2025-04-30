import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  CustomTabLink,
  CustomTabNavRoot,
} from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <CustomTabNavRoot>
        <CustomTabLink as={Link} to="/" active={pathname === "/"}>
          Home
        </CustomTabLink>
        <CustomTabLink
          as={Link}
          to="/favorites"
          active={pathname === "/favorites"}
        >
          Meus Favoritos
        </CustomTabLink>
      </CustomTabNavRoot>

      <h1>Rick And Morty</h1>

      <h2>
        Acompanhe malucas viagens no tempo-espaço e por universos paralelos com
        Rick, um cientista com problemas com a bebida, e seu neto Morty, um
        adolescente não tão brilhante quanto o avô.
      </h2>
    </HeaderContainer>
  );
};

export default Header;
