import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  background-color: #010011;
  color: #FFFFFF;

  padding: 20px;
  border-top: 4px solid  #85D75B;

  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const EpisodesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: start;
  padding: 1.5rem;
  width: 100%;
  font-size: 3rem;
  font-family: sans-serif;
  color: #85D75B;
  


`;