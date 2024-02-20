import styled from "styled-components";
import CharacterCard from "../CharacterCard";
import { CharacterListProps } from "./types";

function CharactersList({ results, handleError }: CharacterListProps) {
  return (
    <CharacterListContainer>
      {results.length ? (
        results.map((result) => {
          return (
            <CharacterCard
              key={`${result.name}--${result.id}`}
              character={result}
            />
          );
        })
      ) : (
        <CharacterListWrapper>
          <CharacterListError>No characters found</CharacterListError>
          <CharacterListErrorButton
            onClick={() => handleError && handleError(true)}
          >
            Back
          </CharacterListErrorButton>
        </CharacterListWrapper>
      )}
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

const CharacterListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CharacterListError = styled.h1`
  font-weight: 500;
  color: white;
`;

const CharacterListErrorButton = styled.button`
  height: 25px;
  width: 100px;
  background-color: rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.568);
  }
`;
