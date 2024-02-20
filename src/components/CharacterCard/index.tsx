import styled, { css } from "styled-components";
import { CharacterCardProps } from "./types";

function CharacterCard({ character }: CharacterCardProps) {
  return (
      <CharacterDiv status={character.status}>
        <div>
          <CharacterImage src={character.image} />
        </div>
        <CharacterInfos>
          <h2>{character.name}</h2>
          <CharacterParagraph>
            <CharacterSpan>Status: </CharacterSpan>
            {character.status}
          </CharacterParagraph>
          <CharacterParagraph>
            <CharacterSpan>Last known location: </CharacterSpan>
            {character.location.name}
          </CharacterParagraph>
        </CharacterInfos>
      </CharacterDiv>
  );
}

export default CharacterCard;

const CharacterDiv = styled.div<{
  status: string;
}>`
  ${(props) => {
    if (props.status === "Alive") {
      return css`
        background: radial-gradient(
          circle,
          rgba(0, 115, 73, 1) 39%,
          rgba(42, 233, 96, 1) 93%,
          rgba(42, 233, 96, 1) 98%
        );
      `;
    }

    if (props.status === "Dead") {
      return css`
        background: radial-gradient(
          circle,
          rgba(166, 170, 191, 1) 0%,
          rgba(166, 170, 191, 1) 14%,
          rgba(68, 65, 66, 1) 98%
        );
      `;
    }

    if (props.status === "unknown") {
      return css`
        background: radial-gradient(
          circle,
          rgba(63, 94, 251, 1) 0%,
          rgba(252, 70, 107, 1) 100%
        );
      `;
    }
  }}
  color: white;
  display: flex;
  flex-direction: column;
  width: 290px;
  padding: 10px;
  height: 500px;
  border-radius: 18px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  &:hover {
    position: relative;
    bottom: 5px;
  }
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
  text-decoration: none;
`;

const CharacterSpan = styled.span`
  font-weight: 600;
`;

const CharacterParagraph = styled.p`
  margin: 10px 0;
`;
