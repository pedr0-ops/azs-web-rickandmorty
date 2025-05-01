import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  CustomTabLink,
  CustomTabNavRoot,
  SearchBarContainer,
  SearchIcon,
  SearchInput,
  Container,
} from "./Header.styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearch } from "../../contexts/SearchContext/SearchContext";

interface HeaderProps {
  showSearch?: boolean;
}

const Header = ({ showSearch = false }: HeaderProps) => {
  const { pathname } = useLocation();
  const { setName } = useSearch();
  const [localName, setLocalName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setName(localName);
    }, 500);

    return () => clearTimeout(timer);
  }, [localName, setName]);

  return (
    <HeaderContainer>
      <Container>
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

        {showSearch && (
          <SearchBarContainer onSubmit={(e) => e.preventDefault()}>
            <SearchIcon />
            <SearchInput
              placeholder="PESQUISAR EPISÓDIO"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
            />
          </SearchBarContainer>
        )}
      </Container>

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
