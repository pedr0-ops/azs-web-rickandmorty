import styled from "styled-components";

export const EpisodeContainer = styled.div`
  display: flex;
  background-color: #010011;
  color: #FFFFFF;

  padding: 20px;
  border-top: 4px solid  #85D75B;

  flex-direction: column;
  align-items: center;
  flex: 1;
   min-height: 50vh; 
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  
  padding: 2rem;
  margin-bottom: 32px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const EpisodeCode = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: #76f45d;
`;

export const EpisodeTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #76f45d;
`;

export const AirDate = styled.p`
  margin: 0;
  color: #ccc;
`;

export const MarkSeenButton = styled.button`
  background: transparent;
  border: 2px solid #76f45d;
  color: #76f45d;
  padding: 8px 16px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #76f45d;
    color: #000;
  }
`;

export const CharacterList = styled.div`
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

export const CharacterCard = styled.div`
  display: flex;
  align-items: center;
  background: #262626;
  padding: 12px;
  border-radius: 8px;
`;


export const CharacterImage = styled.img<{ isAlive: boolean }>`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid ${({ isAlive }) => (isAlive ? "#76f45d" : "#ff4d4f")};
  margin-right: 16px;
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterName = styled.h3<{ isAlive: boolean }>`
  color: ${({ isAlive }) => (isAlive ? "#76f45d" : "#ff4d4f")};
  margin: 0;
`;

export const CharacterMeta = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 4px 0;
`;

export const StatusAlive = styled.span`
  color: #76f45d;
  font-weight: bold;
`;

export const StatusDead = styled.span`
  color: #ff4d4f;
  font-weight: bold;
`;
