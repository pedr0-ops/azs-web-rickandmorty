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
  min-height: 100%;
`;


export const EpisodesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 100%; 
  row-gap: 2.5rem;    
  column-gap: 2rem; 
  width: 100%;
  padding: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr; 
  }
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

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 16px;
`;

export const PaginationButton = styled.button`
  background-color: #85D75B; 
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color:rgb(72, 142, 37);
    transform: scale(1.05); 
  }

  &:disabled {
    background-color:rgb(195, 241, 187);
    color: #010011;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;