import styled from "styled-components";
import image from '../../assets/rick-morty.jpg';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  height: 50vh;
  padding: 3rem;
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