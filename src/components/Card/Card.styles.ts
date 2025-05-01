import styled from "styled-components";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";


export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: space-between;
  
  background-color: #252525;


`;

export const CardDivider = styled.div`
  display: flex;
  flex-direction: row;  
  gap: 20px;
  padding: 1rem;

  background-color: #252525;

`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0.5rem;
  
`;

export const DateInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-family: sans-serif;
  color: #B4BAAD;

`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  font-size: 3rem;

  font-family: sans-serif;
  color: #85D75B;
  font-weight: bold;

`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  max-width: 80%;

  font-family: sans-serif;
  color: #85D75B;
  font-weight: bold;

`;

export const CardStatus = styled.span`
  border-radius: 20px;
  padding: 0.2rem 0.8rem;

  max-height: 20px;
  font-size: 0.6rem;
  font-weight: bold;
  font-family: sans-serif;
  border: 1px solid #85D75B;
  color: #85D75B;

`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  background-color: #85D75B;
  color: #252525;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1rem;

  writing-mode: vertical-rl;

  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color:rgb(71, 156, 31);
    color:rgb(245, 244, 244);
    transform: scale(1.01);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`
export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #252525;

  font-family: sans-serif;
  font-weight: bold;
  font-size: 1rem;

  writing-mode: vertical-rl;

  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`

export const HeartIconCustom = styled(HeartIcon)`
  width: 20px;
  height: 20px;
  color: #85D75B;
`;

export const HeartFilledCustom = styled(HeartFilledIcon)`
  width: 20px;
  height: 20px;
  color: #85D75B;
`;