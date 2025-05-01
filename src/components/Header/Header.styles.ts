import styled from "styled-components";
import image from '../../assets/rick-morty.jpg';
import { TabNav } from "@radix-ui/themes/src/index.js";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";


export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  height: 50vh;
  padding: 3rem;
  padding-top: 1rem;
  flex: 1;
  gap: 1rem;

  background-image: ${()=> `url(${image})`}; ;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    font-size: 5rem;
    color: #85D75B;
    font-family: sans-serif;
    text-align: start;
    margin: 0;
  }

  h2 {
    font-size: 1rem;
    color: #FFFFFF;
    text-align: left;
    max-width: 40%
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


  width: 100%;
`;

export const CustomTabNavRoot = styled(TabNav.Root)`
  display: flex;
  background-color: #123524;
  border-radius: 999px;
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 10px;
  justify-content: center;
  gap: 1.5rem;
  list-style: none;
`;

export const CustomTabLink = styled(TabNav.Link)<{ active?: boolean }>`
  all: unset;
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  text-decoration: none;

  &[data-active] {
    border-bottom: 3px solid #c4ffb0;
  }

  ${({ active }) =>
    active &&
    `
    border-bottom: 3px solid #c4ffb0;
  `}

`;

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  background-color: #85D75B;;
  border-radius: 50px;
  padding: 12px 20px;
  gap: 8px;
  max-width: 250px;
  width: 100%;
`;

export const SearchIcon = styled(MagnifyingGlassIcon)`
  width: 20px;
  height: 20px;
  color: #000;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-weight: bold;
  color: #000;
  width: 100%;

  &::placeholder {
    color: #000;
    opacity: 0.7;
  }
`;
