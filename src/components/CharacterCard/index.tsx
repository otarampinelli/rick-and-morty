import styled from "styled-components";
import { CharacterCardProps } from "./types";
import { Link } from "react-router-dom";

const CharacterDiv = styled.div`
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  color: white;
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 500px;
  border-radius: 18px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const CharacterImage = styled.img`
  width: 100%;
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
`;

const CharacterInfos = styled.div`
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

function CharacterCard({ character }: CharacterCardProps) {
  return (
    <CardLink to={`character/${character.id}`}>
      <CharacterDiv>
        <div>
          <CharacterImage src={character.image} />
        </div>
        <CharacterInfos>
          <h1>{character.name}</h1>
          <p>{character.location.name}</p>
        </CharacterInfos>
      </CharacterDiv>
    </CardLink>
  );
}

export default CharacterCard;
