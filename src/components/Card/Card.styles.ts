// Card.styles.ts
import styled from "styled-components";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #252525;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const CardDivider = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 1rem;
  background-color: #252525;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0.5rem;
`;

export const DateInformation = styled.div`
  font-size: 0.8rem;
  font-family: sans-serif;
  color: #b4baad;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  padding: 1rem;
  font-size: 3rem;
  font-family: sans-serif;
  color: #85d75b;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 0.5rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  max-width: 80%;
  font-family: sans-serif;
  color: #85d75b;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CardStatus = styled.span`
  border-radius: 20px;
  padding: 0.2rem 0.8rem;
  font-size: 0.6rem;
  font-weight: bold;
  font-family: sans-serif;
  border: 1px solid #85d75b;
  color: #85d75b;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #85d75b;
  color: #252525;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1rem;
  writing-mode: vertical-rl;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: rgb(71, 156, 31);
    color: rgb(245, 244, 244);
    transform: scale(1.01);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    writing-mode: unset;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #252525;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const HeartIconCustom = styled(HeartIcon)`
  width: 20px;
  height: 20px;
  color: #85d75b;
`;

export const HeartFilledCustom = styled(HeartFilledIcon)`
  width: 20px;
  height: 20px;
  color: #85d75b;
`;

