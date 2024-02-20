import styled from "styled-components";
import CharacterCard from "../CharacterCard";
import { CharacterListProps } from "./types";

function CharactersList({ results }: CharacterListProps) {
  return (
    <CharacterListContainer>
      {!!results.length &&
        results.map((result) => {
          return (
            <CharacterCard
              key={`${result.name}--${result.id}`}
              character={result}
            />
          );
        })}
    </CharacterListContainer>
  );
}

export default CharactersList;

const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: rgb(39, 43, 51);
  padding: 40px 0;
`;

